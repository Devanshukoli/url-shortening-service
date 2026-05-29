import User from '../models/user.model.js'

const createUser = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return 'email and password not found.'
    }

    const user = await User.create({ email, password })

    return user;
  } catch (error) {
    throw new Error(error)
  }
}

export default createUser;