const express = require('express');
const searchRouter = express.Router();
const { prisma } = require('../db/prisma');

searchRouter.get("/users", async (req, res) => {
    const { email, name, page = 1} = req.query;
    const take = 20;
    const offset = (page - 1 ) * take;

    const where = {};
    if(name) where.name = { contains: name };
    if(email) where.email = { contains: email };

    const users = await prisma.user.findMany({
        where,
        skip: offset,
        take
    });

    const totalUsers = await prisma.user.count({ where });

    if (users.length === 0) {
        return res.status(404).json({ message: "Data not found." });
    }
    res.json({
        amountUsers: totalUsers,
        users,
        page: `${page}/${Math.round(totalUsers / take)}`
    });
});

module.exports = { searchRouter };
