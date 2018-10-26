import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
}, { collection : 'user' });

export default mongoose.model('User', userSchema);