'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const todos = require('./todos');

let nextId = todos[todos.length - 1].id + 1;


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', (req, res) => {
    res.send('👍 API Server works corrected');
});

app.get('/api/todos', (req, res) => {
    res.send(todos);
});

app.post('/api/todos', (req, res) => {
    let id = nextId++
    let todo = {
        id,
        title: req.body.title,
        completed: false
    };

    todos.push(todo);

    res.send(todo);
});

app.put('/api/todos/:id', (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.title = req.body.title || todo.title;

    res.json(todo);
});

app.patch('/api/todos/:id', (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.completed = !todo.completed;

    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    let index = todos.findIndex(todo => todo.id === req.params.id);

    if (index === -1) return res.sendStatus(404);

    todos.splice(index, 1);

    res.sendStatus(204);
});

// Save changes to file todos.json
app.use('/api/todos', function (req, res, next) {
    next();
    console.log(req.method);
    if (req.method !== 'GET') {
        fs.writeFile('./api/todos.json', JSON.stringify(todos), () => {
            console.log('Todos has beeen saved...')
        });
    }
});

app.listen(5000, 'localhost');