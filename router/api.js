const express = require('express')
const router = express.Router()

const schema = require("../db/schema")
router.use(express.json())


router.get('/popular', async (req,res)=>{
    //sort db on likes
    try{
        const popular = await schema.content.find()
        .sort([['likes',-1]])
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return 0
    }
    // return res.send("popular")
})

router.get('/trending',async (req,res)=>{
    //sort db on timestamp
    try{
        await schema.content.find()
        .sort([['createdAt',-1]])
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return 0
    }
})

router.get('/creator/:id', async (req,res)=>{
    // id == name of creator
    try{
        const ID = req.params.id
         await schema.creator.find({name : ID},{
             pass : 0
         })
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return res.status(400)
    }
    
})

router.get('/creator/allvideos/:id', async (req,res)=>{
    // id == name of creator
    try{
        const ID = req.params.id
         await schema.content.find({creator : ID})
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return res.status(400)
    }
    
})

router.get('/info/creators', async (req,res)=>{
    try{
         await schema.creator.find({},{
             name : 1
         })
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return res.status(400)
    }
    
})

router.get('/watch/:id',async (req,res)=>{
    try{
        const ID = req.params.id 
        await schema.content.findById(ID)
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch{
        return res.status(404)
    }
    
    
})

// POST
router.post('/content', async (req,res)=>{
    try{
        const content = new schema.content({
            title: req.body.title,
            utID: req.body.utID,
            description: req.body.description,
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

router.post('/creator', async (req,res)=>{
    const creator = new schema.creator({
        name : req.body.name,
        pass : req.body.pass,
        youtube: req.body.youtube,
        instagram: req.body.instagram,
        youtube_channel_id : req.body.youtube_channel_id ,
        about: req.body.about,
    })
    try{
        const newCreator = await creator.save()
        return res.status(201).json(newCreator)

    }
    catch(err) {
      return res.status(400).json({messsage: err.message})
    }

})

router.patch("/like/:id",async (req,res)=>{
    try{
        const ID = req.params.id
        await schema.content.findByIdAndUpdate(ID,{$inc: {likes: 1}})
        .exec((err,result)=>{
            return res.json(result)
        })
        

    }
    catch(err) {
      return res.status(400).json({messsage: err.message})
    }
})


// admin

router.get('/admin',async (req,res)=>{

    try{
        await schema.site.find()
        .exec((err,result)=>{
            return res.json(result)
        })
    }
    catch(err){
        return res.json({message:err.message})
    }
})

module.exports = router