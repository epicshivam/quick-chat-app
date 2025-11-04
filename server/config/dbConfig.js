import mongoose from "mongoose";

//connecting to db
mongoose.connect(process.env.CONN_STRING);

//storing state
const db = mongoose.connection;

//on connected event
db.on("connected", ()=> console.log(`DB Connected Successfully`));

//on failure event
db.on("error", ()=> console.log(`DB connection unsuccessfull`));

export default db;