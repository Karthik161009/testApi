const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	const { data } = await axios.get('https://dummyjson.com/posts');
	res.status(200).json({
		success: true,
		statusCode: 200,
		data,
	});
});

app.get('/single/:id', async (req, res) => {
	const { data } = await axios.get(
		`https://dummyjson.com/posts/${req.params.id}`
	);
	res.status(200).json({
		success: true,
		statusCode: 200,
		id: req.params.id,
		data,
	});
});

app.post('/post', (req, res) => {
	res.status(200).json({
		success: true,
		statusCode: 200,
		method: 'POST',
		data: req.body,
	});
});
app.listen(8001, () => {
	console.log('server is running on http://localhost:8001');
});
