import connect from "../../utils/db"
import {Snippet} from "../../models/Snippet"
export default async function handler(req, res) {
    await connect();
    if(req.method === "POST"){
        const data = req.body
        const snippet = await Snippet.create(data);
        res.status(200);
        res.json(snippet);
    } else {
        res.status(500)
        res.send("Sorry we don't accept get requests.");
    }
}