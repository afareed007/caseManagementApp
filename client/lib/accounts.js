AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPwd',
    path: '/reset-password',
    template: 'signInAtForm',
    layoutTemplate: 'defaultLayout',
    layoutRegions: {
        top: 'defaultHeader',
        //footer: 'myFooter'
    },
    contentRegion: 'main'
});
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'signInAtForm',
    layoutTemplate: 'defaultLayout',
    layoutRegions: {
        top: 'defaultHeader',
        //footer: 'myFooter'
    },
    contentRegion: 'main'
});