const express = require('express');
const path = require('path');

const API_URL = "https://api-dishes.vercel.app/";
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname,'./public')));

//Enrutamiento
app.use("/", require('./routers/indexRouter'));
// app.use("/", require('./routers/indexRouter'));

app.listen(PORT,()=>console.log(`Server ready at port ${PORT}`));