'use strict';

const Joi = require('joi');

const internal = {};
internal.schema = {};
internal.schema.head = Joi.object({
  uri: Joi.string().uri().replace(/\/$/, '').required(),
  collection: Joi.string().required()
});

internal.schema.number = Joi.number().greater(0).less(101);

// const testObj = {
//   uri: 'http://www.google.com',
//   collection: 'hello'
// }

// const testRes = internal.schema.head.validate(testObj);

// console.log('----number test: ' + require('util').inspect(internal.schema.number.validate(100)));

// if (testRes.error) console.log(testRes.error);
// else console.log('valid object: ' + require('util').inspect(testRes.value));

internal.schema.trial = Joi.object({
  ClnclStudyId: Joi.string().required(),
  SubjEntrScrng: Joi.number(),
  SubjInScrng: Joi.number(),
  SubjDropScrng: Joi.number(),
  SubjInTrtmnt: Joi.number(),
  SubjCmpltTrtmnt: Joi.number(),
  SubjCmpltTrtmntEntrFu: Joi.number(),
  SubjCmpltTrtmntCmpltFu: Joi.number(),
  SubjCmpltTrtmntDropFu: Joi.number(),
  SubjDropTrtmnt: Joi.number(),
  SubjDropTrtmntEntrFu: Joi.number(),
  SubjDropTrtmntCmpltFu: Joi.number(),
  SubjDropTrtmntDropFu: Joi.number(),
  SubjInFu: Joi.number(),
  SubjRndmzd: Joi.number(),
  SubjDicntnd: Joi.number().allow(null),
  SubjDicntntnPrcntg: Joi.number().allow(null),
  SubjScrnFailedPrcntg: Joi.number().allow(null),
  SnpshtDt: Joi.date(),
  CrtdDtm: Joi.date(),
  LstUpdtdDtm: Joi.date(),
  EtlPrcsFlg: Joi.string()
});

var testObj = {
      "ClnclStudyId": "-15242",
      "SubjEntrScrng": "5",
      "SubjInScrng": "0",
      "SubjDropScrng": "4",
      "SubjInTrtmnt": "1",
      "SubjCmpltTrtmnt": "0",
      "SubjCmpltTrtmntEntrFu": "0",
      "SubjCmpltTrtmntCmpltFu": "0",
      "SubjCmpltTrtmntDropFu": "0",
      "SubjDropTrtmnt": "0",
      "SubjDropTrtmntEntrFu": "0",
      "SubjDropTrtmntCmpltFu": "0",
      "SubjDropTrtmntDropFu": "0",
      "SubjInFu": "0",
      "SubjRndmzd": "0",
      "SubjDicntnd": null,
      "SubjDicntntnPrcntg": null,
      "SubjScrnFailedPrcntg": null,
      "SnpshtDt": "2015-05-10T17:35:41",
      "CrtdDtm": "2015-05-11T17:35:41",
      "LstUpdtdDtm": "2015-05-11T17:35:41"
    }

Joi.validate(testObj, internal.schema.trial, function (err, value) {

  if (err) return console.log(err);

  return console.log('passed');
});
