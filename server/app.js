const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

const DB = 'mongodb+srv://sabbas486249:Raza5085458@cluster0.7oysnrj.mongodb.net/angularfirstapp?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{console.log(err);});

const User = require('./models/userSchema');

app.post('/register', (req,res)=>{
    console.log(req.body);
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error: "Plzz fill misisng fields"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: "Email already registered"});
        }

        const newUser = new User({name, email, password});

        newUser.save().then(()=>{
        res.status(201).json({message:"Successfully registered"})
        }).catch((err)=>{ res.status(500).json({error:"User not registered" })});
        
    }).catch((err)=>{console.log(err);})
    console.log(req.body);
});

app.get('/getData', (req, res) => {
    User.find({}).
    then((data)=>{ res.send(data) }).
    catch((err)=>{ console.log(err); })
  });

  app.get('/getUser/:userId', (req, res)=>{
    User.find({_id:req.params.userId}).
    then((user)=>{ res.send(user) }).
    catch((err)=> { console.log(err) });
  });

  app.patch('/updateUser/:userId', (req, res)=>{
    User.findOneAndUpdate({_id:req.params.userId}, {$set: req.body}).
    then(()=>{ res.status(200).json({message:"Updated Succesfully"})}).
    catch((err)=>{ console.log(err)});
  })

  app.delete('/deleteUser/:userId', (req, res)=>{
    User.findByIdAndDelete({_id:req.params.userId}).
    then(()=>{ res.status(200).json({message:"Updated Succesfully"})}).
    catch((err)=>{ console.log(err)});
  })



app.get('/',(req, res)=>{
    res.send("Hello world");
})

app.listen(5000, ()=>{console.log("listening at 5000 port")});