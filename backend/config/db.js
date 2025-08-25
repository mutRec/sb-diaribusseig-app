// importem mongoose que és una llibreria que ens permet connectar-nos a la base de dades.
// s'utilizarà al fitxer server.js dins a start() per connectar a la BBDD abans d'obrir/aixecar el servidor
// web amb express.
import mongoose from "mongoose";

export const connectDB = (uri) => {
    return mongoose.connect(uri)
}