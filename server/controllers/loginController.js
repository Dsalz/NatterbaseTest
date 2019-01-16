import tokenizer from '../middleware/tokenizer';

export default {
    async login (req, res){
        const { username, password } = req.body;
        if( username === 'admin' && password === 'admin'){
            const token = await tokenizer.createToken({ username, password })
            return res.status(200).json({ token })
        }
        return res.status(401).json({ error: "Invalid Credentials"})
    }
}