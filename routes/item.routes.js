const {
    getItems,
    createItem,
    updateItem,
    deleteItem,
} = require("../controllers/item.controller");

const router = require("express").Router();

router.route("/").get(getItems).post(createItem).patch(updateItem);
router.route("/:id").delete(deleteItem);

module.exports = router;
