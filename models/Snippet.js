import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    code: String,
    slug: String,
    info: String,
});

export const Snippet = mongoose.models.Snippet || mongoose.model('Snippet', snippetSchema);