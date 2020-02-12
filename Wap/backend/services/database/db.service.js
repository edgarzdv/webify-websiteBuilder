const MongoClient = require('mongodb').MongoClient;

// Connection URL
const CONNECTION_URL = 'mongodb+srv://talazenkot:ZKfiOxLwK4BfOlzh@studying-pbxfs.mongodb.net/test?retryWrites=true&w=majority';
// const CONNECTION_URL = (false && process.env.NODE_ENV === 'production') ?
//     'mongodb+srv://talazenkot:ZKfiOxLwK4BfOlzh@studying-pbxfs.mongodb.net/test?retryWrites=true&w=majority'
//     : 'mongodb://localhost:27017';

// Database Name
const dbName = 'webify_db';
var dbConnection = null;

async function connect() {
    if (dbConnection) return dbConnection;
    try {
        const client = await MongoClient.connect(CONNECTION_URL,
            { useNewUrlParser: true, useUnifiedTopology: true });
        dbConnection = client.db(dbName);
        return dbConnection;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect();
    return db.collection(collectionName);
}

module.exports = {
    getCollection
}