import { connect } from 'mongoose';
import { disconnect } from 'process';
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new error("cannot connect to MongoDb");
    }
}
async function disconnectFromDb() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new error("cannot disconnect from MongoDb");
    }
}
export { connectToDatabase, disconnectFromDb };
//# sourceMappingURL=connection.js.map