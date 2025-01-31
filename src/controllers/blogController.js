const Blog = require('../models/blogModel');
const User = require('../models/userModel');

// Create new blog controller function

const createNewBlog = async (req, res) => {
    const { title, content, description, tag, author, } = req.body;
    const { userId } = req.user
    try {
        const newBlog = new Blog({
            title,
            content,
            description,
            tag,
            author,
            user: userId
        });
        await newBlog.save();

        if (!newBlog) {
            return res.status(400).json({ error: "Blog creation failed" });
        }
        return res.status(201).json({ message: "Blog created successfully", newBlog });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }

};

// Get all blogs controller function

const getAllBlogs = async (req, res) => {
    try {
        // Pagination for the blogs
        // Get the page and limit querry parameters from the request
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Prepare the query to find all the blogs and populate the user details
        const blogQuerry = Blog.find().populate("user", "firstName lastName email")

        // Get the paginated blogs and the total count in parallel using Promise.all method
        const [blogs, totalBlogs] = await Promise.all([
            blogQuerry.skip(skip).limit(limit),
            Blog.countDocuments()
        ]);

        // Calculate the number of pages

        const totalPages = Math.ceil(totalBlogs / limit);

        // // If no blogs are found, return a 404 error

        if (!blogs || blogs.length === 0) {
            return res.status(404).json({ error: "No blogs found" });
        }

        // Return the paginated list of blogs with pagination metadata
        
        return res.status(200).json({
            message: "Blogs retrieved successfully",
            page,
            totalPages,
            totalBlogs,
            blogs
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve blogs due to server error" });
    }
};


// Get a single blog controller function

const getSingleBlog = async (req, res) => { 
    try {
        const { blogId } = req.params;
        const getSingleBlog = await Blog.findById(blogId).populate("user", "firstName lastName email");
        if (!getSingleBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        return res.status(200).json({ message: "Success", getSingleBlog });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// update blog controller function
const updateBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { userId } = req.user;
        const { title, content, description, tag, author, PublishedAt } = req.body;

        // Fetch the blog to check for existence and ownership
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        // Check if the current user is the owner of the blog
        if (blog.user.toString() !== userId) {
            return res.status(403).json({ error: "Unauthorized to update this blog" });
        }

        // Update the blog fields, including the new PublishedAt field
        const updatedBlog = await Blog.findByIdAndUpdate(
            blogId,
            { title, content, description, tag, author, PublishedAt },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(400).json({ error: "Blog update failed" });
        }

        return res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ error: "Server error" });
    }
};


// delete blog controller function
const deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        // pass the userId from the req.user object
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" }); 
        }
        return res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ error: "Server error" });
    }
};



module.exports = { createNewBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog };

