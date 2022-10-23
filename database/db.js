import mongoose from 'mongoose';

const connection = async (username, password) =>{
    const url = `mongodb+srv://${username}:${password}@itisabhi.7tvxggl.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Connected with database successfuly");
    } catch (error) {
        console.log("Can't connect with database..." + error);
    }
}

export default connection;