const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { clerkMiddleware } = require('@clerk/express');
const { inngest, functions } = require('./inngest/index.js');
// Safely require the inngest/express helper. The package may export default or named.
const _inngestExpress = require('inngest/express');
const serve = (_inngestExpress && (_inngestExpress.serve || _inngestExpress.default || _inngestExpress));
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is Live!'));
// Register Inngest route if the helper is available and is a function
try {
	if (typeof serve === 'function') {
		app.use('/api/inngest', serve({ client: inngest, functions }));
	} else {
		console.warn('inngest/express `serve` not found or not a function. Skipping /api/inngest route.');
		console.warn('module exports:', Object.keys(_inngestExpress || {}));
	}
} catch (err) {
	console.error('Error registering /api/inngest route:', err);
}

// Connect to DB and then start the server. Use an async IIFE so we don't need top-level await.
(async () => {
	try {
		await connectDB();
		app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
	} catch (err) {
		console.error('Failed to start server', err);
		process.exit(1);
	}
})();