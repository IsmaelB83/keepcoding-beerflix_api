const config = require('config');
const debug = require('debug')('BEER:User');
const validator = require('validator');
const { Beer } = require('../models');

module.exports.getBeers = async (req, res, next) => {
  try {
    const beers = await Beer(config.get('ddbb'))
      .getBeers();
    return res.status(201).json({ success: true, beers });
  } catch (e) {
    debug(e);
    return next(new Error(e));
  }
};

module.exports.getBeer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const beer = await Beer(config.get('ddbb'))
      .getBeer(id);
    return res.status(201).json({ success: true, beer });
  } catch (e) {
    debug(e);
    return next(new Error(e));
  }
};

module.exports.addLike = async (req, res, next) => {
  const { id } = req.params;
  try {
    const beer = await Beer(config.get('ddbb'))
      .addLike(id);
    return res.status(201).json({ success: true, beer });
  } catch (e) {
    debug(e);
    return next(new Error(e));
  }
};

module.exports.addComment = async (req, res, next) => {
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const beer = await Beer(config.get('ddbb'))
      .addLike(id, comment);
    return res.status(201).json({ success: true, beer });
  } catch (e) {
    debug(e);
    return next(new Error(e));
  }
};
