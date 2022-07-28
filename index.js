import express from "express";
import mongoose from "mongoose";
import api from './Router/api.js'
import cors from 'cors'

const app = express()

// for post req 
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost/CraGanShop')

app.use('/api' , api)


app.listen(3030)
