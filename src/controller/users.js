const UsersModel = require("../models/userrs");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "GET all Users succes",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};
const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;

  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: "data yg dimasukan kurang lengkap",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.json({
      messag: "create new user success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      message: "UPDATE users success",
      data: { idUser, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
