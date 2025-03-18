import mysql2 from "mysql2";
import express from "express";
import cors from "cors";


/* Creamos la 'app' que se conectara a la db */
const app=express();

/* Configuracion de la app para cors y recibir json */
app.use(cors());
app.use(express.json());

/* Creamos la conexion a la db */
const db = mysql2.createConnection({
        host:"localhost",
        user:"root",
        password:"123456",
        database:"anubis"

})

app.get('/api/videojuegos',(req,res)=>{
    db.query("select * from videojuegos",(err,results)=>{
        if(err)return res.status(500).json({error:err.message});
        res.json(results);
    })
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});



