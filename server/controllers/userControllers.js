const User = require('../models/userModel');


// description/route - read/GET /users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json('Error server server getUsers: ' + error)
    }
}

// description - create/POST /users
const postUsers = async (req, res) => {
    const username = req.body.username;
    const surname = req.body.surname;
    const money = Number(req.body.money);
    const date = Date.parse(req.body.date);

    // const { username, surname, money, date } = req.body;

    const newUser = new User({
        username,
        surname,
        money,
        date
    });

    try {
        await newUser.save();
        res.status(200).json(newUser)

    } catch(error) {
        res.status(404).json('Error server postUsers: ' + error)
    }
}


// description - update/PUT /users/:id
const updateUsers = async (req, res) => {
    const id = req.params.id;

    const username = req.body.username;
    const surname = req.body.surname;
    const money = Number(req.body.money);
    // const date = Date.parse(req.body.date);

    const updateUser = { _id: id, username, surname, money};

    try {
        // new: true - return modified doc rather original
        await User.findByIdAndUpdate(id, updateUser, { new: true })
        res.status(200).json({message: `Update ${req.params.id}`})

    } catch(error) {
        res.status(404).json('Error server updateUsers: ' + error)
    }
};

// description - delete/DELETE /users/:id
const deleteUsers = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({message: `Delete ${req.params.id}`})

    } catch(error) {
        res.status(404).json('Error server deleteUsers: ' + error)
    }

}

module.exports = {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
}
