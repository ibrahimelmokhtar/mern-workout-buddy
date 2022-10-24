import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';

// Configure port number
dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;

// Create express server
const app = express();

// Used middle-wares
app.use([morgan('tiny'), express.json()]);

// Test server/database connection
app.get('/api/workouts', (req, res) => {
	res.status(200).json({
		message: 'Data received successfully',
	});
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Start receiving requests on specific port
		app.listen(PORT, () => {
			console.log(
				`Connected to database && Listening on http://localhost:${PORT}`
			);
		});
	})
	.catch((error) => {
		console.error(error);
	});
