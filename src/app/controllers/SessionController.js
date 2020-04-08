import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionCrontroller {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }

    /*
    utilizando método checkPassword do model User
    para validar se senha existe e está correta
    */
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    // pay loader jwt
    return res.json({
      user: {
        id,
        name,
        email,
      },
      // token criado no site md5online.org e configurado no arquivo src>config>auth.js
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionCrontroller();