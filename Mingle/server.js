import express from 'express'; 
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';//for adding headers for security purpose

//App Congig
const app=express();
const port=process.env.PORT || 8001;
const connection_url=`mongodb+srv://admin:Yg7kQJFKr7khQnrK@cluster0.4jysc.mongodb.net/mingledb?retryWrites=true&w=majority`;

//MiddleWare
app.use(express.json());
app.use(Cors());

//DB Congig
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
});

//API Endpoints
app.get('/',(req,res) => 
 res.status(200).send("Hello SACHIN!!")
);

app.post("/mingle/cards", (req,res) => {
    const dbCard=req.body;
    
    Cards.create(dbCard, (err,data) => {
       if(err){
           res.status(500).send(err);
       } else{
           res.status(201).send(data);
       }
    });
});

app.get('/mingle/cards', (req,res) => {
    
    Cards.find((err,data) => {
       if(err){
           res.status(500).send(err);
       } else{
           res.status(200).send(data);
       }
    });
});
//Listener
app.listen(port,()=>console.log(`Listening on localhost: ${port}`));