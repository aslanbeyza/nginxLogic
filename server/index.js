const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Beyzoşş');
    });

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
    });

  
