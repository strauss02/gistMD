import mongoose from 'mongoose'

export default await mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log('Connected successfully to MongoDB'))
  .catch((err) => {
    console.log('Connection to MongoDB failed.', err)
  })
