import express from 'express';
import {
  getLinks,
  createLink,
  putLink,
  deleteLink,
} from '../controllers/linksController.js';
const router = express.Router();

// const links = [
//   {
//     theme: 'next',
//     name: 'Next.js 14 - How to Submit FORM DATA using UseFormState',
//     link: 'https://www.youtube.com/watch?v=AbLAxs-7yl0&list=PL7lXhMmy4JB7ekfZ9-nLhvPCofUlM7VBK',
//     id: 1,
//   },
//   {
//     theme: 'react',
//     name: 'Next.js 14 - How to Submit FORM DATA using UseFormState',
//     link: 'https://www.youtube.com/watch?v=AbLAxs-7yl0&list=PL7lXhMmy4JB7ekfZ9-nLhvPCofUlM7VBK',
//     id: 2,
//   },
// ];

// router.get('/', (req, res) => {
//   console.log(links);
//   res.send(links);
//   // res.status(200).json({ msg: 'hello world' });
// });

// router.post('/', (req, res) => {
//   const link = req.body;

//   // console.log('Links request');
//   res.send('links request');
//   links.push({ ...link, id: uuidv4() });
//   console.log(req.body);
//   // res.status(200).json({ msg: 'post request' });
// });
// router.get('/123', (req, res) => {
//   res.send('hello world');
// });

router.get('/', getLinks);
router.post('/', createLink);
router.put('/:id', putLink);
router.delete('/:id', deleteLink);

export default router;
