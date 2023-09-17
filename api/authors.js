import express from 'express';
import prisma from './lib/index.js';
const router = express.Router();

 


router.get('/', async (req, res) => {
  try {
    const author = await prisma.author.findMany();
    if (author.length === 0) {
      res.status(404).json({ error: "Author kaas lamahelin!" })
    }
    res.json(author);
  }
  catch (error) {
    res.status(500).json({ error: error.message })
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.findUnique({
      where: {
        id: Number(id), 
      },
    });

    if (!author) {
      return res.status(404).json({ error: "Author kaas majiro!" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
      }
    });
    if (!author) {
      res.status(404).json({ message: " Author kaas lama sameyn" })
    }


    res.status(201).json(author);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "invalid" });
  }
});

 
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const author = await prisma.author.update({
      where: {
        id: Number(id)
      },
      data: {
        name
      }
    })
    if (!author) {
      res.status(404).json({ error: "  updating gigaas lama hagaajin" })
    }
    res.json(author)


  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

 
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.delete({
      where: {
        id: Number(id)
      }

    });
    if (!author) {
      res.status(404).json({ error: " invalid" })
    }

    res.json(author)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
 

export default router;