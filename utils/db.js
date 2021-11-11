import mongoose from 'mongoose'
let isConnected = false

const connect = async () => {
    if (!isConnected) {
        await mongoose.connect(process.env.MONGODB_URL)
    }
    isConnected = true
}

export default connect;