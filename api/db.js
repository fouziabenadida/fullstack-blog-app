
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = 'mongodb+srv://benadidafouzia:rd2SxFN3pGQmqiCn@mycluster.k1vnwmy.mongodb.net/NODE-API?retryWrites=true&w=majority';

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
