import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { collection : 'post' });

export default mongoose.model('Post', postSchema);