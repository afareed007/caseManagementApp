FlowRouter.route('/', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function() {
        this.register('users', Meteor.subscribe('users'));
    },
    action: function() {
        BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "Index"});
    }
});
FlowRouter.route('/logout', {
    action: function() {
        Meteor.logout();
        FlowRouter.go('/')
    }
});
