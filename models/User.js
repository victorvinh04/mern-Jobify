import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name'],
		minLength: 3,
		maxLength: 255,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please enter your email address'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide valid email',
		},
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please enter your password'],
		minLength: 6,
		select: false,
	},
	lastName: {
		type: String,
		required: [true, 'Please enter your last name'],
		minLength: 3,
		maxLength: 20,
		default: 'lastName',
	},
	location: {
		type: String,
		trim: true,
		maxLength: 20,
		default: 'my city',
	},
});

UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

export default mongoose.model('User', UserSchema);
