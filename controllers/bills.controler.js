const { StatusCodes } = require("http-status-codes");
const Bill = require("../models/BillModel");

exports.createBill = async (req, res) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(StatusCodes.CREATED).json({ bill });
    } catch (error) {
        console.log(error);
    }
};

exports.getBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(StatusCodes.OK).json(bills);
    } catch (error) {
        console.log(error);
    }
};
