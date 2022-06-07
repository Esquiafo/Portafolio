const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, "../build")));
  
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../build', 'index.html'))
});
// app.get('/tes/test', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'))
// });


app.get('/portfolio/api', (req,res) =>{
   res.json('hi')
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);