import mongoose from 'mongoose'
let isConnected = false

const connect = async () => {
    if (!isConnected) {
        await mongoose.connect('mongodb://localhost/dumps')
    }
    isConnected = true
}

export default connect;