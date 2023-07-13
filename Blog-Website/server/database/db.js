import mongoose from 'mongoose';

const Connection = async () => {
    const localURI = 'mongodb+srv://parmeet608:1997nov16@cluster0.ca3ncbm.mongodb.net/';
    try {
        await mongoose.connect(localURI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
