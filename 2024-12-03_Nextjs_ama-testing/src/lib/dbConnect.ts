import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number;
}

const connection: connectionObject = {}

async function dbConnect() :Promise<void>{
    
    if(connection.isConnected){
        console.log("Database already is connected")
        return 
    }
    
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})
        connection.isConnected = db.connections[0].readyState
        console.log("Database connection Successfull")
    }catch(err){
        console.log('Database Connection failed')
        process.exit(1);
    }
}

export default dbConnect;