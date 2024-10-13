const express = require('express');
const { prisma } = require('../db/prisma');

const registerRouter = express.Router();
const { z } = require('zod');

const userSchema = z.object({
    name: z.string().min(3, { message: "Must be 3 or more characters long." }).max(30),
    email: z.string().email({ message: "Invalid email address." })
});

registerRouter.post("/register", async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            res.json({ message: "Empty data." }).status(400);
        }
        const validDate = userSchema.parse({
            name: data.name,
            email: data.email
        });

        const createdUser = await prisma.user.create({
            data: validDate
        });
        res.json({
            message: "User created!",
            user: {
                createdUser
            }
        }).status(201);
    } catch (err) {
        if (err instanceof z.ZodError) {
            res.json({
                errorMessage: err.issues[0].message
            }).status(400);
        }
    }

});

module.exports = { registerRouter }