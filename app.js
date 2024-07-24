const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

console.log('starting server');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

console.log('starting middleware');

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

console.log('listening set up complete');