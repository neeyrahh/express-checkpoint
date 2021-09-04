const express = require('express');
const app = express();
const port = 4000;
app.use(date = (req, res, next) => {
    let curentDate = new Date().getHours();
    if (curentDate >= 8 && curentDate <= 18) {
        next()
    } else {
        res.status(503).send('Our office is not open now');
    }
})
app.use(express.static(__dirname + 'Public'))
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
 
 
  