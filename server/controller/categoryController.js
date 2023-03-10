const Category = require("../models/categoryModel");

const getCategory = async (req, res) => {
  let data = await Category.find({});
  let filtered_data = await data.map((item) =>
    Object.assign({}, { type: item.type, color: item.color })
  );
  return res.json(filtered_data);
};

const postCategory = async (req, res) => {
  const Create = new Category({ type: "Investment", color: "#fcbe44" });
  await Create.save()
    .then(() => {
      console.log(Create);
      res.json(Create);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: `Error while creating a category ${err}` });
    });
};

module.exports = { getCategory, postCategory };
