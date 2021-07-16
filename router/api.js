const express = require('express')
const router = express.Router()

const schema = require("../db/schema")
router.use(express.json())

router.get('/popular', async (req,res)=>{
    //sort db on likes
    try{
        const popular = await schema.content.find()
        return res.json(popular)
    }
    catch{
        return 0
    }
    // return res.send("popular")
})
router.get('/trending',(req,res)=>{
    //sort db on timestamp
    return res.send("trending")
})
router.get('/creator/:id',(req,res)=>{
    console.log(req.params);
    //res on creator "name"
    return res.send("trending")
})
router.get('/watch/:id',(req,res)=>{
    console.log(req.params.watch);
    //res data
    return res.send("watch")
})

router.post('/content', async (req,res)=>{
    try{
        const content = new schema.content({
            title: req.body.title,
            utID: req.body.utID,
            desc: req.body.desc,
            episodes: req.body.episodes,
            creator: req.body.creator
        })
        const newContent = await content.save()
        return res.status(201).json(newContent)

    }
    catch(err){
        res.status(400).json({message: err.message})
    }

})

module.exports = router