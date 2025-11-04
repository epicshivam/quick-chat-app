import 'dotenv/config'
import app from "./app.js"
import dbConfig from "./config/dbConfig.js"

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, ()=> {
    console.log("Hi im server", process.env.PORT_NUMBER);
})