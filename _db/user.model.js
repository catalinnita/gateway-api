import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	subscriptionId: {
		type: String,
		required: false
	},
	customerId: {
		type: String,
		required: false
	},
}, {
	writeConcern: {
		w: 'majority',
		j: true,
		wtimeout: 1000,
	},
});

User.set('toJSON', { virtuals: true });

export default mongoose.model('User', User);
