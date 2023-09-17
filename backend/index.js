const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { OpenAI } = require("openai")

const app = express()

const openai = new OpenAI({
    apiKey : "insert key"
})

app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())

app.post("/openapi" , async(req,res)=>{
    const {userMessage} = req.body
    console.log(userMessage)
    try{
        const response = await openai.chat.completions.create({
        messages : [
            {role : "system" , content : "You are a helpful assistant"},
            {role : "user" , content : `Give answer related to this - ${userMessage}`}
        ],
        model: "gpt-3.5-turbo-0301"
        })

        const answer = response.choices[0].message.content
        console.log(answer)
        res.status(200).send({answer})
    }
    catch(err){
        console.log("OpenAI Error :",err)
        res.status(500).send({msg : "Error" , err})
    }
})

app.listen(5000 , ()=>{
    console.log("Server is running on 5000")
})
