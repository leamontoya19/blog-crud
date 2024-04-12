import bcrypt from "bcrypt";
import User  from "../models/UserModel.js"; 
import { Op } from "sequelize";


export const register = async (req, res) => {
    try {
        // Aquí verifico si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ email: req.body.email }, { username: req.body.name }]
            }
        });
        
        if (existingUser) {
            return res.status(409).json({ error: "User already exists!" });
        }

        // Hash del password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Crea un nuevo usuario en la base de datos
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });
        return res.status(200).json({ message: "User created successfully" });
         } catch (error) {
        return res.status(500).json({ error: error.message });
         }
};


export const login = (req, res) => { }

export const logout = (req, res) => { }
