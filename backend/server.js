import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Configure port number
dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;

// Create express server
const app = express();

// Used middle-wares
app.use(morgan('tiny'));

// Start server
app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
