

const register = async (req, res) => {
    try {
        const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });
        if (existingUser) {
            return res.status(409).json("User already exists!");
        }
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        await newUser.save();

        res.status(200).json("User has been created.", { newUser });
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e);
    }


};

const login = (req, res) => {

    res.send('User login');
};

const logout = (req, res) => {

    res.send('User logout');
};

module.exports = {
    register,
    login,
    logout,
};
