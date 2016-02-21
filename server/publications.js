//Meteor.publish("users", function () {
//    return Meteor.users.find({_id: this.userId()});
//});
Meteor.users.deny({
    update: function() {
        return true;
    }
});