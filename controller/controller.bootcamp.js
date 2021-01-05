const { json } = require("express");

const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require("../models/BootCamp");

exports.getAllBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

exports.getSingleBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      next(new ErrorResponse(`can't find this id ${req.params.id}`,404));
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    next(error)
  }
};

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      next(new ErrorResponse(`can't find this id ${req.params.id}`,404));
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      next(new ErrorResponse(`can't find this id ${req.params.id}`,404));
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
