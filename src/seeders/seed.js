 const db = require('../utils/database');   
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');

   const users = [
    {username : 'Iannacuss', email: 'ian@gmail.com', password: '1234'}
   ];

   const todos = [
    {title: 'tarea 1', description: 'sharala', userId: 1},
    {title: 'dormir', userId: 2},
   ];

db.sync({force:true})
.then(()=>{
    console.log('inyectando');
    users.forEach((user)=>Users.create(user));
    setTimeout(()=>{
    todos.forEach((todo)=>Todos.create(todo));

    },100);
})