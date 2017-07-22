var friendsArray = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    app.post("/api/friends", function(req, res) {
        // Empty out the arrays of data
        friendsArray.push(req.body);
        res.json(true);
        console.log(friendsArray);
    });
};