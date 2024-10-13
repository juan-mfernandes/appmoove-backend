const fs = require('fs');
const csv = require('csv'); 
const path = require('path');
const express = require('express');
const { prisma } = require('../db/prisma.js');

const importRoute = express.Router();

const csvFile = path.join(__dirname, '../../users.csv')
const BATCH_SIZE = 1000;

importRoute.post("/import", async(req, res) => {
    let batch = [];
    let rowCount = 0;

    //pipe - connects the writing and reading streams, without storing intermediate data
    //columns: true - the first line of the csv file is treated as a column and the name corresponds to the database column
    //delimiter is ","

    const stream = fs.createReadStream(csvFile)
    .pipe(csv.parse({ columns: true, delimiter: "," }))
        
    // add the event when read one line and execute the function sending the data as param
    .on('data', async(lineData) => {
        try {
            rowCount++;
            batch.push({
                id: lineData.id,
                name: lineData.name,
                email: lineData.email
            });
            console.log("Insertng record: ", lineData);
            if(batch.length >= BATCH_SIZE) {
                stream.pause(); 
                insertBatch(batch).then( () => {
                    batch = []; 
                    stream.resume(); 
                });
            }
        } catch (err) {
            console.log("Error inserting record: ",err);
            res.json("Error inserting record", err);
        }
    }).on('error', (err) => {
        console.log("Error read file: ", err);
        res.json("Error reading file", err);
    }).on('end', () => {
        console.log("File saved successfully.");
        console.log("Total lines: ", rowCount);
        res.json({
            success: "File saved successfully.",
            totalLines: rowCount
        });
    } );
}) 
   
async function insertBatch(batch) {
    try {
        await prisma.user.createMany({
            data: batch,
            skipDuplicates: true
        });
        console.log(`Inserted ${batch.length} records.`)
    }catch(err) {
        throw err;
    }
}

module.exports = { importRoute }



