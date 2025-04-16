import mongoose from "mongoose";

export const Connection = async (URL) => {

   
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
       
    } catch(error) {
        console.log('Error: ', error.message);
    }

}

export default Connection;