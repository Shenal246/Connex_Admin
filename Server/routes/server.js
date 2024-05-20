// server.jss
const express = require('express');
const mysql = require('mysql');
const { BOOLEAN } = require('sequelize');
const router =express.Router();
const port = 5000;

//server information
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'connexdb',
});




connection.connect();
let dta=null;


router.post('/search', (req, res) => {
    const data=req.body
    const key=data.key
    if(key=="Cr6re8VRBm"){
      const query =`${data.query}`; // Adjust this query based on your table structure
      console.log(data)
        connection.query(query, (error, results, fields) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error});
          } else {
            res.status(200).json(results);
            
          }
        });
      
    }
 
});
router.post('/insert', async (req, res) => {
    const data=req.body;
    const key=data.key
    if(key=="FKoaDwCi7C"){
      const value=[data.value1,data.value2,data.value3,data.value4,data.value5];
      const newValue=value.filter(Boolean);
     
      const query=`${data.query}`;
  
     
      console.log("Query :"+query+"  Values : "+newValue )
      connection.query(query, (newValue), (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error inserting data' );
          } else {
            res.status(200).send(req.body);
          }
        });
  
      
    }
    

  });
router.post('/delete', (req, res) => {
    const data=req.body
    const key=data.key
    if(key=="U1dgS1mRqd"){
      const query =`${data.query}`; // Adjust this query based on your table structure
      console.log(data)
      connection.query(query, (error, fields) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error});
        } else {
          res.status(200).json("success");
          
        }
      });
      
    }
   
});
router.post('/update', (req, res) => {
  const data=req.body
  const key=data.key
  if(key=="2fOIhLJipb"){
    const query =`${data.query}`; // Adjust this query based on your table structure
    console.log(data)
    connection.query(query, (error, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error});
      } else {
        res.status(200).json("success");
        
      }
    });
    
  }
 
});
router.get('/test', async (req, res) => {
  res.status(404).json("worked");
});
router.post('', (req,res) => {
  const data=req.body
  const key=data.key
  if(key=="93EPF6vGTt"){
    const query =`${data.query}`; // Adjust this query based on your table structure
    console.log(data)
    connection.query(query, (error, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json("worked");
      } else {
        res.status(200).json("success");
        
      }
    });
  }
  });

module.exports = router;
