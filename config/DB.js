module.exports = {
    //DB: 'mongodb://chat:chat@localhost:27017/chatDB'
    DB: eval(process.env.MONGODB_URI)
 };