const createUser = async (req, res) => {
  try {
    const newUser = await User.create({ username: req.body.username, password: req.body.password })
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByPk(req.params.id);
    await updatedUser.update(req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByPk(req.params.id);
    await deletedUser.destroy();
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
