const express = require("express")

app.get('/test', (req, res) => res.send({
	result: "hello world"
}))