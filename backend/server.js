const express= require ('express')
const dotenv = require ('dotenv')
const app=express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send('api is running')
})


const PORT = process.env.PORT;
console.log(process.env.PORT)
app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}`)
);
 