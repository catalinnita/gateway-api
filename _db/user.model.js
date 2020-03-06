const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { 
    	type: String, 
    	unique: true, 
    	required: true 
    },
    hash: { 
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
    }
});

schema.set('toJSON', { 
	virtuals: true,
	writeConcern: {
		w: 'majority',
		j: true,
		wtimeout: 1000
	}, 
});

module.exports = mongoose.model('User', schema);