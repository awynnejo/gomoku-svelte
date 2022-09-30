const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
//app.use(cors());
//app.use(express.static('public'));
//app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
//});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

app.use(express.json())

app.use('api/v2/createuser', (req, res, next) =>{
   console.log("createuser")
})

app.use('api/v2/login', (req, res, next) =>{
   console.log('login')
})

app.use('api/v2/games', (req, res, next) =>{
   console.log("games")
})

app.use('api/v2/gamedetails', (req, res, next) =>{
   console.log('gamedetails')
})

app.use('api/v2/newgame', (req, res, next) =>{
   console.log("newgame")

})

app.use('api/v2/')
