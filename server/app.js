const express = require('express');
const app = express();
const PORT = process.env.PORT || 4242;
const path = require('path');

const isDev = process.env.NODE_ENV === 'dev';

// --------------------------------------------------------------------
// Body parsing / middleware
// --------------------------------------------------------------------

// serve static files
app.use(express.static('dist'));
app.use(express.static('public'));

app.use('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
	console.log(`<<<----***** app running on port ${PORT} *****---->>>`);
});
