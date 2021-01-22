const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const filepath ='./data.json';
const data = require(filepath);

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json());
  // we are handling all of the request comming to our server
  server.get('/api/v1/movies',(req,res)=>{
    return res.send(data);
  });

  server.get('/api/v1/movies/:id',(req,res)=>{
    const movieIndex = data.findIndex(m => m.id === req.params.id);
        if(movieIndex!=-1){
            const movie = data[movieIndex];
            return res.json(movie);
        } else {
            return res.json("Movie Not found")
        }
  });

  server.post('/api/v1/movies', (req,res)=>{
    let movieData = data.push(req.body);
    
    let file = path.join(__dirname,filepath);
    const stringFilledData = JSON.stringify(data,null,2);
    fs.writeFile(file,stringFilledData,(err)=>{
     if(err){
      res.statusCode(422);
      return res.json("File not found");}
      return res.json(data);
    } 
    )
  });

  server.delete('/api/v1/movies/:id',(req,res)=>{
    const movieIndex = data.findIndex(m => m.id === req.params.id);
    data.splice(movieIndex,1);
    let file = path.join(__dirname,filepath);
    const stringFilledData = JSON.stringify(data,null,2);
    fs.writeFile(file,stringFilledData,(err)=>{
     if(err){
      res.statusCode(422);
      return res.json("File not found");}
      return res.json(data);
    } 
    )
  });

  server.patch('/api/v1/movies/:id',(req,res)=>{
    const movieIndex = data.findIndex(m => m.id === req.params.id);
    data[movieIndex] = req.body;
    let file = path.join(__dirname,filepath);
    const stringFilledData = JSON.stringify(data,null,2);
    fs.writeFile(file,stringFilledData,(err)=>{
     if(err){
      res.statusCode(422);
      return res.json("File not found");}
      return res.json(data);
    } 
    )
  });

  server.get('*', (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res)
  })


  const PORT = process.env.PORT || 3100;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
});