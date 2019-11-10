'use strict'
const User = use('App/Models/User')
const Store = use('App/Models/Store')
class AuthController {
  /**
         * @swagger
         * /register:
         *   post:
         *     tags:
         *      - Auth
         *     description: Register to the application
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: username
         *         description: Username to use for login.
         *         in: formData
         *         required: true
         *         type: string
         *       - name: email
         *         description: User's Email.
         *         in: formData
         *         required: true
         *         type: string
         *       - name: password
         *         description: User's password.
         *         in: formData
         *         required: true
         *         type: string
         *     responses:
         *       200:
         *         description: Register Success
         */
  async register ({ request, auth, response }) {
    const user = await User.create(request.all())

    // generate token for user;
    const token = await auth.generate(user)

    Object.assign(user, token)

    return response.json(user)
  }

  /**
     * @swagger
     * /login:
     *   post:
     *     tags:
     *      - Auth
     *     description: Login to the application
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: email
     *         description: email to use for login.
     *         in: formData
     *         required: true
     *         type: string
     *       - name: password
     *         description: User's password.
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: login
     */
  async login ({ request, auth, response }) {
    const { email, password, location } = request.all()

    try {
      if (await auth.attempt(email, password)) {
        const user = await User.findBy('email', email)
        const token = await auth.generate(user)

        Object.assign(user, token)
        if(location){
          const store = await Store.find(location)
          if(store){
            let userObj = user.toJSON()
            userObj['store'] = store.store_name
            return response.json(userObj)
          }
        }
        return response.json(user)
      }
    } catch (e) {
      return response.json({ message: 'You are not registered!' })
    }
  }
}

module.exports = AuthController
