Ext.define ('Webed.controller.MainBar', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control ({
            'main-bar button[action=save-document]': {
                click: this.saveDocument
            },
            'main-bar button[action=open-document]': {
                click: this.openDocument
            },
            'main-bar splitbutton[action=add]': {
                click: this.add
            },
            'main-bar menuitem[action=add-project]': {
                click: this.addProject
            },
            'main-bar menuitem[action=add-folder]': {
                click: this.addFolder
            },
            'main-bar menuitem[action=add-text]': {
                click: this.addText
            },
            'main-bar button[action=rename]': {
                click: this.rename
            },
            'main-bar button[action=delete]': {
                click: this.delete
            },
            'main-bar button[action=import-project]': {
                click: this.importProject
            },
            'main-bar button[action=export-project]': {
                click: this.exportProject
            }
        });
    },

    saveDocument: function (item, event, options) {
        console.debug ('[MainBarCtrl.saveDocument]');
    },
    openDocument: function (item, event, options) {
        console.debug ('[MainBarCtrl.openDocument]');
    },
    add: function (item, event, options) {
        this.addProject (item, event, options);
    },
    addProject: function (item, event, options) {
        this.application.fireEvent ('create_set', {
            name: 'Project', mime: 'application/project'
        });
    },
    addFolder: function (item, event, options) {
        this.application.fireEvent ('create_set', {
            name: 'folder', mime: 'application/folder'
        });
    },
    addText: function (item, event, options) {
        this.application.fireEvent ('create_doc', {
            name: 'options', ext: 'cfg', mime: 'text/plain'
        });
    },
    rename: function (item, event, options) {
        console.debug ('[MainBarCtrl.rename]');
    },
    delete: function (item, event, options) {
        this.application.fireEvent ('destroy_node');
    },
    importProject: function (item, event, options) {
        console.debug ('[MainBarCtrl.importProject]');
    },
    exportProject: function (item, event, options) {
        console.debug ('[MainBarCtrl.exportProject]');
    }
});