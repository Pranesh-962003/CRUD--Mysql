import express from "express"
import mysql from 'mysql'
import cors from 'cors'



const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login'
})


app.get('/',(req,res)=>{
    const sql = "select * from users";
    db.query(sql,(err,result)=>{
        if (err) return res.json(err);
        return res.send(result);
    })
})

app.post('/student',(req, res)=>{
    const sql = "INSERT INTO users (`NAME`,`EMAIL`) VALUES (?)"
    const values = [req.body.name,req.body.email];
    db.query(sql,[values],(err,result)=>{
        if(err){
            return res.json(err);
        }else{
            
            return res.send(result);
        }
    })
})


app.get('/read/:id',(req,res)=>{
    const sql = "select * from users WHERE ID = ?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if (err) return res.json(err);
        return res.send(result);
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = 'update users set `NAME` = ?, `EMAIL` = ? WHERE ID =?'
    const id = req.params.id;
    db.query(sql,[req.body.name, req.body.email,id],(err,result)=>{
        if(err){
            return res.json(err);
        }else{
            return res.json(result);
        }
    })
})


app.delete('/delete/:id',(req,res)=>{
    const sql = 'DELETE FROM USERS WHERE ID = ?';
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err){
            res.send(err); 
        }else{
            res.json(result)
        }
    })
})



app.listen(8081,()=>{
    console.log("listening");
    
})