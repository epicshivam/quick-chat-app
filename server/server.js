import 'dotenv/config'
import app from "./app.js"

app.listen(process.env.PORT_NUMBER, ()=> {
    console.log("Hi im server", process.env.PORT_NUMBER);
})