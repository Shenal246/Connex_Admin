const express=require('express')
const app =express();
const cors=require('cors')

app.use(express.json());
app.use(cors());




const sereverRouter=require('./routes/server')
;app.use("",sereverRouter);



    app.listen(5000,()=>{
        console.log("Server run on port 5000");
    });


