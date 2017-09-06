var friendsArray = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    app.post("/api/friends", function(req, res) {

        let friendMatch = {
            name: '',
            photo: '',
            matchDiff: 50
        }
        let userData = req.body;

        for (value of friendsArray){

            let matchVal = 0;

            for (let i = 0; i < 10; i++){
                matchVal += Math.abs(parseInt(userData.scores[i]) 
                - parseInt(value.scores[i]));

                if (matchVal <= friendMatch.matchDiff) {
                    friendMatch.name = value.name;
                    friendMatch.photo = value.photo;
                    friendMatch.matchDiff = matchVal;
                }
            }
        }
        friendsArray.push(userData);
        
        res.json(friendMatch);
    });
};