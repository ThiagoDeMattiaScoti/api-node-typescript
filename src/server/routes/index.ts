import { Router } from 'express';
const router = Router()

router.post('/teste', (req, res) => {
    res.json(req.body)
})

export { router }