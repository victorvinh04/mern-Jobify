import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		throw new BadRequestError('please provide all values');
	}

	const userAlreadyExists = await User.findOne({ email });
	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use');
	}

	const user = await User.create(req.body);
	const token = user.createJWT();
	res
		.status(StatusCodes.OK)
		.json({
			user: {
				email: user.email,
				lastName: user.lastName,
				location: user.location,
			},
			token,
		});
};
const login = async (req, res) => {
	res.send('login user');
};
const updateUser = async (req, res) => {
	res.send('update user');
	User.findOneAndUpdate();
};
export { register, login, updateUser };
