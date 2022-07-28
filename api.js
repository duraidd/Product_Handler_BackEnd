import express from "express";
import MyModal from '../Schema/ProductSchema.js'
const router = express.Router()
import uuid from 'generate-unique-id'
router.use(express.json())


router.get('/' , async (req , res)=> {
    let allData = await MyModal.find({})
    res.send(allData)
})

//  topRate
router.get('/getTopRate' , async (req , res)=> {
    let allData = await MyModal.find().sort({rating:-1})
    res.send(allData)
})

//  specialOffer
router.get('/getSpecialOffer' , async (req , res)=> {
    let allData = await MyModal.find().sort({offer:-1})
    res.send(allData)
})

// addProduct
router.post('/AddProduct' , async (req , res)=> {

/**
 * 
 * RequestData
 * 
 * "image":'https://source.unsplash.com/random',
    "title": 'Product 12',
    "price": 543,
    "offer": 923,
    "rating":2
 */


// req
let reqData  = req.body

reqData['id']='id-'+uuid({
    length: 8,
    useLetters: false
})

let storeData = await MyModal.insertMany(tempStore)

console.log(storeData);

res.json({result : 'Ok' , success:true})
})


export default router