const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('contact');
        const collection = database.collection('contactlist');

        // Insert documents
        await collection.insertMany([
            { lastName: 'Ben',   firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
            { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
            { lastName: 'Emilie', firstName: 'brouge', email: 'emilie.b@gmail.com', age: 40 },
            { lastName: 'Alex', firstName: 'brown', age: 4 },
            { lastName: 'Denzel', firstName: 'Washington', age: 3 }
        ]);

        // Display all contacts
        console.log("All contacts:");
        const allContacts = await collection.find().toArray();
        console.log(allContacts);

        // Display information about one person using their ID
        const id = allContacts[0]._id; // Example: using the first contact's ID
        console.log(`Contact with ID ${id}:`);
        const oneContact = await collection.findOne({ _id: id });
        console.log(oneContact);

        // Display contacts with age > 18
        console.log("Contacts with age > 18:");
        const contactsAbove18 = await collection.find({ age: { $gt: 18 } }).toArray();
        console.log(contactsAbove18);

        // Display contacts with age > 18 and name containing "ah"
        console.log('Contacts with age > 18 and name containing "ah":');
        const contactsWithNameAh = await collection.find({
            age: { $gt: 18 },
            firstName: /ah/
        }).toArray();
        console.log(contactsWithNameAh);

        // Change the contact's first name from "Kefi Seif" to "Kefi Anis"
        await collection.updateOne(
            { lastName: 'Kefi', firstName: 'Seif' },
            { $set: { firstName: 'Anis' } }
        );
        console.log('Updated contact Kefi Seif to Kefi Anis');

        // Delete contacts aged under 5
        await collection.deleteMany({ age: { $lt: 5 } });
        console.log('Deleted contacts aged under 5');

        // Display all contacts again
        console.log("All contacts after updates:");
        const updatedContacts = await collection.find().toArray();
        console.log(updatedContacts);

    } finally {
        await client.close();
    }
}

main().catch(console.error);