const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    var s = path.resolve(__dirname, '../client/build', 'index.html');
    console.log(`Server listening on ${__dirname}`);
    console.log(`Server listening on ${s}`);
    console.log(`Server listening on AAAA`);
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

