// pagination validation middleware function

const paginationValidator = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page < 1 || limit < 1) {
        return res.status(400).json({ error: "Page and limit must be positive integers" });
    }

    req.query.page = page;
    req.query.limit = limit;
    next();
};

module.exports = paginationValidator;
