const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const fmmSchema = new Schema({
    name: [String],
    type: [String],
    size: [Number]
});
fmmSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this;
    self.findOne(condition, function(err, result) {
        return result ? callback(err, result) : self.create(condition, function(err, result) { return callback(err, result) })
    })
};
const uploadFile = mongoose.model('uploadFile', fmmSchema);

exports.uploadModel = uploadFile;