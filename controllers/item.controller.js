const Item = require("../models/ItemModel");
const { StatusCodes } = require("http-status-codes");

exports.createItem = async (req, res, next) => {
    try {
        const itme = await Item.create(req.body);
        res.status(StatusCodes.CREATED).json(itme);
    } catch (error) {
        console.log(error);
    }
};

exports.getItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        res.status(StatusCodes.OK).json(items);
    } catch (error) {
        console.log(error);
    }
};

exports.updateItem = async (req, res, next) => {
    try {
        await Item.findOneAndUpdate({ _id: req.body.itemId }, req.body);
        res.status(StatusCodes.OK).json({ message: "Item update success" });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteItem = async (req, res, next) => {
    try {

        await Item.findOneAndDelete({ _id: req.params.id });
        res.status(StatusCodes.OK).json({ message: "Item delete success" });
    } catch (error) {
        console.log(error);
    }
};


