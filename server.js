const express = require ("express");
const app = express();
const ejs = require(`ejs`);
const path = require(`path`);


//template engine
app.set(`views` , path.join(__dirname , `/views`));
app.set(`view engine`, `ejs`);
app.use(express.static(`public`));
app.use(express.json());

const connectDB =require(`./config/db`)
connectDB();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
// Cors 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions))

//routes 

app.use(`/api/files`, require(`./routes/files`));
app.use(`/files`, require(`./routes/show`));
app.use('/files/download', require('./routes/download'));




app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})