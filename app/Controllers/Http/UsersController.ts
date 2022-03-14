import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create ({ view }: HttpContextContract) {
    return view.render('users/create')
  }

  public async store ({ request }: HttpContextContract) {
    await User.create({
      email: request.input('email'),
      password: request.input('password'),
    })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
