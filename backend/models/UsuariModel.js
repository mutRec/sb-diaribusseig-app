import mongoose from "mongoose";

// Creem un schema per la nostra BBDD MongoDB 'socBalena_app' definida al fitxer .env (Variables d'Entorn).
// Creo schema Uusari com a nou collection de la BBDD mongoDB.
const usuariSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Creem el model a partir de l'anterior schema creat.
export const UserModel = mongoose.model("Usuari", usuariSchema);
