/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/login', async ({ view }) => {
  return view.render('login')
})

Route.post('/login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(email, password)
    response.redirect('/dashboard')
  } catch {
    return response.badRequest('Invalid credentials')
  }
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  response.redirect('/login')
})

Route.resource('/users', 'UsersController')

Route.get('/dashboard', async ({ view }) => {
  return view.render('dashboard')
}).middleware('auth')
