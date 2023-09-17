import express from 'express';
import prisma from './lib/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const bookstore = await prisma.bookstore.findMany();
        if (bookstore.length === 0) {
            return res.status(404).json({ error: 'bookstore not found' });
        }
        res.json(bookstore);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const bookstore = await prisma.bookstore.findUnique({
            where: {
                id: Number(id),

            }
        })

        if (!bookstore) {
            req.status(404).json({ message: "bookstore not found" })
        }
         
        res.json(bookstore)
    }

    catch (error) {

    }
});

router.post('/', async (req, res) => {
    try {
        const { name, location } = req.body;
        const bookstore = await prisma.bookstore.create({
            data: {
                name,
                location

            },
        });
        if (!bookstore) {
            return res.status(404).json({ error: 'Not created' });
        }
        res.json(bookstore);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location } = req.body;

        const bookstore = await prisma.bookstore.update({
            where: {
                id: Number(id),
            },
            data: {
                name, 
                location
            },
        })
        if (!bookstore) {
            return res.status(404).json({ error: 'not updated' });
        }
        res.json(bookstore);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

///delete the book store
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const bookstore = await prisma.book.delete({
            where: {
                id: Number(id),
            },
        });
        if (!bookstore) {
            return res.status(404).json({ error: 'bookstore not deleted' });
        }
        res.json(bookstore);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default router;