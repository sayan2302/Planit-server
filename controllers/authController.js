import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        // check if user email exists
        const existingUsername = await User.findOne({ username })
        if (existingUsername) {
            return res.status(409).json({ message: 'Username already exists' })
        }

        // check if user email exists
        const existingEmail = await User.findOne({ email })
        if (existingEmail) {
            return res.status(409).json({ message: 'This email already exists' })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // create new User
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()

        res.status(201).json({ message: 'User registered successfully' })


    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}