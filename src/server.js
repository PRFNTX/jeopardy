const express=require("express");
const mongoose=require("mongoose");
const Game=require("./models/game")
mongoose.connect("mongodb://localhost/jeopardy")
const app=express()

app.use(express.json())

app.get("/game/:name",(req,res)=>{
    Game.findOne({name:req.params.name},(err,game)=>{
        if (err){
            res.status(400).json({message:"failed to find"+req.params.name})
        }
        res.status(200).json(game)
    })
})
app.put("/game",(req,res)=>{
    let body=req.body
    Game.find({name:body.name}, (err,game)=>{
        if (err){
            res.status(400).json({message:"could not find"+body.name})
        }
        game.categories=body.categories;
        game.answers=body.answers;
        game.save((err,gameFin)=>{
            if (err){
                res.status(400).json({message:"failed to save"+body.name})
            }
            res.status(200).json(gameFin)
        })
    })
})
app.delete('/game/:name',(req,res)=>{
    Game.remove({name:req.params.name},(err)=>{
        if(err){
            res.status(400).json({message:"failed to remove"+req.params.name})
        }
        res.status(200).json({message:"item deleted"})
    })
})
app.get("/game",(req,res)=>{
    Game.find({},(err,results)=>{
        if (err){
            res.status(400).json({message:"failed to get games"})
        }
        res.status(200).json(results)
    })
})

app.post('/game',(req,res)=>{
    let body=req.body
    console.log(body)
    Game.create({
        name:body.name,
        categories:body.categories,
        answers:body.answers
    },(err,game)=>{
        if (err){
            console.log(err);
            res.status(400).json({message:"failed to save"})
        }
        console.log(game)
        res.status(200).json(game)
        
    })
})

app.listen(process.env.PORT||8080,()=>{
	console.log("started")
})
