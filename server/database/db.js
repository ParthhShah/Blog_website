import mongoose from 'mongoose';

const Connection = async () => {
    const localURI = 'mongodb://127.0.0.1:27017/BLOG';
    try {
        await mongoose.connect(localURI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
