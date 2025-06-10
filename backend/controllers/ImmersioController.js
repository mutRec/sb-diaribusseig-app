import { ImmersioModel } from "../models/ImmersioModel.js";

/*
TORNA TOTS ELS ELEMENTS
*/
export const getImmersions = async (req, res)=>{
   try {
       const immersio = await ImmersioModel.find()
       res.status(200).json(immersio)
   } catch (error) {
       res.status(500).json({message:error.message})
   }
}

/*
TORNA UN ELEMENT EN BASE A UN IDENTIFICADOR
*/
export const getImmersio = async (req, res)=>{
    try {
        const {id} = req.params
        const immersio = await ImmersioModel.findById(id)
        if(!immersio) {
            return res.status(404).json(`Immersio amb ID: ${id} no trobada`)
        }
        res.status(200).json(immersio)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/*
CREA UN ELEMENT
*/
export const createImmersio = async (req, res)=>{
    try {
        const immersio = await ImmersioModel.create(req.body)
        res.status(201).json(immersio)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/*
ACTUALITZA UN ELEMENT
*/
export const updateImmersio = async (req, res)=>{
    try {
        const {id} = req.params
        const immersio = await ImmersioModel.findByIdAndUpdate({_id: id}, req.body)        
        res.status(200).json(immersio)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/*
ELIMINA UN ELEMENT EN BASE A UN IDENTIFICADOR PER CERCAR-LO.
*/
export const deleteImmersio = async (req, res)=>{
    try {
        const {id} = req.params
        const immersio = await ImmersioModel.findByIdAndDelete(id)
        if(!immersio) {
            return res.status(404).json(`Immersio amb ID: ${id} no trobat`)
        }
        res.status(200).json("Immersio correctament eliminada")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}