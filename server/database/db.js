import mongoose from "mongoose";
export const Connection = async ()=>{
    const URL = 'mongodb+srv://meenauppada971:Bhavani123456@ecommerce-web.imnhj.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce-web';
    try {
        await mongoose.connect(URL,{ useNewUrlParser : true, ssl:true})
        console.log('Database connected successfully')
    }catch(error){
        console.log("Error while connecting to database", error.message)
    }
}
export default Connection;