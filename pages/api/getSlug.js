let { generate } = require("randomstring");

export default async function handler(req, res) {
    const randomSlug = generate({
        length: 4,
        charset: 'alphanumeric'
    });
    res.json({ randomSlug })
}