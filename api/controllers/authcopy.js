import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {

    //CHECK EXISTING USER (FIRST QUERY)
    const qSelect = "SELECT * FROM users WHERE email = ? OR username = ?";
    
    db.query(qSelect, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        if (data.length) return res.status(409).json({ error: "User already exists!" });

        //HASH THE PASSWORD AND CREATE A USER
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Another query
        const qInsert = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(qInsert, values, (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.status(200).json({ message: "User created successfully" });
        });
    });
};

export const login = (req, res) => { }

export const logout = (req, res) => { }
