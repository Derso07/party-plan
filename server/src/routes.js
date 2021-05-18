const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');

const UsersController = require('./app/controllers/UsersController');
const SessionController = require('./app/controllers/SessionController');
// const controllers = requireDir('./app/controllers')

const authMiddleware = require('./app/middleware/auth');
const ServicesController = require('./app/controllers/ServicesController');
const { Router } = require('express');

// Primeira rota
routes.get('/',(req,res) => {res.send('hello world');})

// Rotas de Login 
routes.post('/Session', SessionController.Store);
// routes.post('/Session/PostUser', SessionController.ReturnUserByToken);

// Middleware de verificação de token 
routes.get('/VerifyToken', authMiddleware, (req,res)=>{res.json('Autenticado')});

// User Routes
routes.get('/Users', UsersController.Index);
routes.get('/Users/Profile/:id', UsersController.Profile);
routes.post('/Register', UsersController.Register);
routes.put('/User/UpdateProfile/:id', UsersController.UpdateProfile);
routes.delete('/User/DeleteProfile/:id', UsersController.DeleteProfile);
routes.get('/User/ConfirmEmail/:token', UsersController.ConfirmEmail);
routes.post('User/ResendEmail', UsersController.ResendEmail);
routes.put('/User/UpdatePassword', UsersController.UpdatePassword);
routes.post('/RecoverPassword', UsersController.RecoverPassword);
routes.post('/RecoverPassword/ComparePin', UsersController.ComparePin);

//Service Routes

routes.get('/Services', ServicesController.Index);
routes.get('/Services/:id', ServicesController.Detais);
routes.post('/Services/Create', ServicesController.Create);
routes.put('/Services/Update/:id', ServicesController.Update);
routes.delete('/Services/Delete/:id', ServicesController.delete);



module.exports = routes;