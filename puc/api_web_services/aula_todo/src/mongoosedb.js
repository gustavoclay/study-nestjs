const mongoose = require('mongoose');

const user = "admin";
const password = "KUUCCWMMV6J-Nhg";
const database = "todo_sample";
const serverName = "cluster0.ro9gn.mongodb.net";

module.exports = {
    init: () => {
        mongoose.connect(`mongodb+srv://${user}:${password}@${serverName}/${database}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then((res) => console.log(`MongoDB connected ${res}`))
            .catch((err) => console.log(`MongoDB error ${err}`));
    }
}