import express, { urlencoded } from 'express' // Framework per Nodejs.
import https from 'https'
import fs from 'fs'
import cors from 'cors' // Cross-Origin Resource Sharing. Polítiques de navegador per controlar accessos http web a la nostra API.
import dotenv from 'dotenv' // Per fer servir fitxer .env per variables entorn.
import { connectDB } from './config/db.js'
import router from './routes/routes.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use("/api/immersions", router)

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(MONGO_URI)
        console.log("MongoDB Connected!")

        /*
        https
        .createServer(
        {
         key: fs.readFileSync("privkey1.pem"),
         cert: fs.readFileSync("fullchain1.pem"),
        },
        app
        )
        .listen(PORT, ()=>{
            console.log(`Server running at port: ${PORT}`);
        })
        */
        app.use("/api/auth", router);
        app.listen(PORT, () => {
            console.log(`Server running at port: ${PORT}`);
        })

        app.use(express.static('sb-diaribusseig'));

    } catch (error) {
        console.log(error);
    }
}

start()