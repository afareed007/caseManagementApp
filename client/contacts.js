Template.ContactsList.viewmodel({
    myName: function () {
        if (Meteor.userId()) {
            return Meteor.users.find({_id: Meteor.userId()}).fetch()._id;
        }
    },
    addToTask: function () {
        console.log("addToTask");
        Session.set('addToTask', 'true');
    },
    showAddTask: function () {
        return Session.get('addToTask');
    },
    onDestroyed: function () {
        console.log("ondestroy");
    },
    onCreated: function () {
        console.log("oncreated");
    },
    onRendered: function () {
        var str = " Ahmed Fareed   ";
        var nameArr = s.words(str);
        var nAl = nameArr.length;
        var nextTLastW = s(nameArr[nAl -2]).trim().capitalize().value();
        var lastWord = s(nameArr[nAl -1]).trim().capitalize().value();
        console.log(nAl);
        console.log(nextTLastW.charAt(0) + lastWord.charAt(0));
        $('.popupthis').popup({
            popup: '#popupthis',
            on    : 'click',
            onVisible: function () {
                console.log("onVisible");
            },
            exclusive: 'true'
        });
    }
});