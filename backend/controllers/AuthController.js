import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UsuariModel.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

/*
REGISTRE UN USUARI
*/
export const registreUsuari = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Usuari ja existeix" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Usuari registrat correctament" });
  } catch (err) {
    res.status(500).json({ message: "Error al registrar l'usuari" });
  }
};

/*
INICI DE SESSIÓ D'UN USUARI
*/
export const loginUsuari = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Credencials incorrectes" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Credencials incorrectes" });

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "2h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error al iniciar sessió" });
  }
};
