Template.Index.viewmodel({
    //showCases: 'hello',
    aCases: function () {
        Session.set("cPanelContent", "CasesList")
    },
    aTasks: function () {
        Session.set("cPanelContent", "TasksList")
    },
    aNotes: function () {
        Session.set("cPanelContent", "NotesList")
    },
    aMsgs: function () {
        Session.set("cPanelContent", "MsgsList")
    },
    aContacts: function () {
        Session.set("cPanelContent", "ContactsList")
    },
});
Template.CPanel.viewmodel({
    aCases: function () {
        var showCases = Session.get("cPanelContent");
        if (showCases == 'CasesList'){
            return 'CasesList'
        }
        return ''
    },
    aTasks: function () {
        var aTasks = Session.get("cPanelContent");
        if ( aTasks == 'TasksList'){
            return 'TasklsList'
        }
        return ''
    },
    aNotes: function () {
        var aNotes = Session.get("cPanelContent");
        if ( aNotes == 'NotesList'){
            return 'NotesList'
        }
        return ''
    },
    aMsgs: function () {
        var aNotes = Session.get("cPanelContent");
        if ( aNotes == 'MsgsList'){
            return 'MsgsList'
        }
        return ''
    },
    aContacts: function () {
        var aContacts = Session.get("cPanelContent");
        if ( aContacts == 'ContactsList'){
            return 'ContactsList'
        }
        return ''
    },
});
