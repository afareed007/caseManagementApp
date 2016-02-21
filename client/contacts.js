Template.ContactsList.viewmodel({
    myName: function () {
        if (Meteor.userId()) {
            return Meteor.users.find({_id: Meteor.userId()}).fetch()._id;
        }
    }
});