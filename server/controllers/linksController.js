import asyncHandler from 'express-async-handler';
import { linksModel } from '../models/linksModel.js';

export const getLinks = asyncHandler(async (req, res) => {
  const links = await linksModel.find();
  // res.status(200).json({ msg: 'get Link' });
  res.status(200).json(links);
});

export const createLink = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('add field name');
  }
  if (!req.body.link) {
    res.status(400);
    throw new Error('add field link');
  }
  if (!req.body.select) {
    res.status(400);
    throw new Error('add field select');
  }
  const link = await linksModel.create({
    name: req.body.name,
    link: req.body.link,
    select: req.body.select,
  });
  // res.status(200).json({ msg: 'create Link' });
  res.status(200).json(link);
});

export const putLink = asyncHandler(async (req, res) => {
  const link = await linksModel.findById(req.params.id);

  if (!link) {
    res.status(400);
    throw new Error("Link don't found");
  }
  const updateLink = await linksModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  // res.json({ msg: `update Link ${req.params.id}` });
  res.status(200).json(updateLink);
});

export const deleteLink = asyncHandler(async (req, res) => {
  const link = await linksModel.findById(req.params.id);
  if (!link) {
    res.status(400);
    throw new Error("Link don't found");
  }
  await link.deleteOne();
  res.status(200).json({ id: req.params.id });
});
