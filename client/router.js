FlowRouter.route('/', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function() {
        BlazeLayout.render("defaultLayout", {top: "defaultHeader", main: "index"});
    }
});
FlowRouter.route('/logout', {
    action: function() {
        Meteor.logout();
        FlowRouter.go('/')
    }
});