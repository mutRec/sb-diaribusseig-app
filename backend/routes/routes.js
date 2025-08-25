// Fitxer per especificar les rutes (paths) que ferem servir per l'ús de la nostra API.
import express from 'express'
import { getImmersions, getImmersio, createImmersio, updateImmersio, deleteImmersio } from '../controllers/ImmersioController.js'
import { registreUsuari, loginUsuari } from '../controllers/AuthController.js'  

const router = express.Router()

// Les rutes les farem servir fent ús de la llibreria express. Les rutes, són com les portes d'entrada per 
// l'aplicació, és a dir, són com cartells que diuen... si vas per aquí feré aixó, i/o alló. Quan algú fa
// alguna petició tipus (GET ó POST), la ruta decidirá quina funció s'haurà d'executar.
router.get("/", getImmersions)
router.get("/:id", getImmersio)
router.put("/:id", updateImmersio)
router.post("/", createImmersio)
router.delete("/:id", deleteImmersio)
router.post("/register", registreUsuari)
router.post("/login", loginUsuari)

export default router