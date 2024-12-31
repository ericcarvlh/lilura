import mongoose from "mongoose";

async function MongodbConnect() {
    mongoose.connect(process.env.MONGODB_CONNECTION_LILURA_STRING);

    return mongoose.connection;
}

export default MongodbConnect;