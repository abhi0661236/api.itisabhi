import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


import AdminCollection from '../models/adminSchema.js';


export const createAdmin = async (req, res) => {
    
    try {
        const { email, username, password } = req.body;
        // check if the admin already exit
        const admin = await AdminCollection.findOne({ email });
        if (admin) {
            return res.status(400).json({ msg: 'Email already exists.' });
        }

        // create new admin
        const validatedAdmin = new AdminCollection({
            email,
            username,
            password
        });

        // has user password
        const salt = await bcrypt.genSalt(10);
        validatedAdmin.password = bcrypt.hash(password, salt);
        await validatedAdmin.save();

        // return jwt
        const payload = {
            admin: {
                id: validatedAdmin.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '7 days' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );


    } catch (error) {
        res.status(500).json('Server Error');
    }
}

export const getAdmin = async (req, res) => {
    try {
        const username = req.params.username;
        const admin = await AdminCollection.find({ username: username });
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const greet = async (req, res) => {
    res.json({"message": "server is up"});
}