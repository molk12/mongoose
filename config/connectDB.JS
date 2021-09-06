///////////IMPORT MONGOOSE//////////////////
const mongoose=require("mongoose")


/////FUNCTION CONNECTDB//////

const connectDB =  async()=> {
    try {
        await  mongoose.connect(process.env.MONGO_URI )
        console.log('DB is connected')
    } catch (error) {
        console.log ({msg:'DB is not connected'})
        
    }
    
}
///////////export function////////
module.exports=connectDB
