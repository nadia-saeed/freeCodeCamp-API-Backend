let express = require('express');
let app = express();
const path = require('path');

// 1- meet the node console
function caseOne(){
    console.log("Hello World");
};

// 2- start a working express server
function caseTwo(){
    app.get('/', (req, res)=>{
    res.send('Hello Express');
    });
};

// 3- serve an HTML file
function caseThree(){
    const absolutePath = path.join(__dirname, 'views', 'index.html');
    app.get('/', (req,res) => {
    res.sendFile(absolutePath);
});
};

// 4- serve static assets
function caseFour(){
    const absolutePath = path.join(__dirname, 'views', 'index.html');

    app.use('/public', express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) => {
    res.sendFile(absolutePath);
    });
};

// 5- serve JSON on a specific route
function caseFive(){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });
    
    app.get('/json', (req, res) => {
        res.json({"message": "Hello json"});
    });
};

    caseOne();
    // caseTwo();
    // caseThree();
    caseFour();
    // caseFive();






























 module.exports = app;
