

const register = (req, res) => {

    const { username, email, password } = req.body;
    res.json({ requestData: { username, email, password } });
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
