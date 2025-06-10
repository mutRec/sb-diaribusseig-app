import mongoose from "mongoose";

// Creem un schema per la nostra BBDD MongoDB 'socBalena_app' definida al fitxer .env (Variables d'Entorn).
const immersioSchema = new mongoose.Schema(
    {
        numimmersio:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        dataimmersio: {
            type: String,
            require: [true, "Please complete the field"]
        },
        lloc:{
            type: String,
            required: [true, "Please complete the field"]
        },
        centre:{
            type: String,
            required: [true, "Please complete the field"]
        },
        visibilitat:{
            type: String,
            required: [true, "Please complete the field"]
        },
        tempaire:{
            type: Number,
            required: false
        },
        tempaigua:{
            type: Number,
            required: false 
        },
        profmax:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        atmini:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        atmfinal:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        ampolla:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        llast:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        horaentrada:{
            type: String,
            required: [true, "Please complete the field"]
        },
        horasortida:{
            type: String,
            required: [true, "Please complete the field"]
        },
        tempsfons:{
            type: Number,
            required: [true, "Please complete the field"]
        },
        paradaseguretat:{
            type: String,
            required: [true, "Please complete the field"]
        },
        comentaris:{
            type: String,
            required: [true, "Please complete the field"]
        },
    },
    {
        timestamps:true,
        versionkey:false
    }
);

// Creem el model a partir de l'schema.
export const ImmersioModel = mongoose.model("Immersio", immersioSchema)