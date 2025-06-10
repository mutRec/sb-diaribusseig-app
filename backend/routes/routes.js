// Fitxer per especificar les rutes (paths) que ferem servir per l'ús de la nostra API.
import express from 'express'
import { getImmersions, getImmersio, createImmersio, updateImmersio, deleteImmersio } from '../controllers/ImmersioController.js'
import { registreUsuari, loginUsuari } from '../controllers/AuthController.js'  

const router = express.Router()

router.get("/", getImmersions)
router.get("/:id", getImmersio)
router.put("/:id", updateImmersio)
router.post("/", createImmersio)
router.delete("/:id", deleteImmersio)
router.post("/register", registreUsuari)
router.post("/login", loginUsuari)

export default router