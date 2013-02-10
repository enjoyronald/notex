Ext.define ('Webed.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',

    requires: [
        'Ext.layout.container.Border',
        'Webed.view.MainBar',
        'Webed.view.NodeTree',
        'Webed.view.LeafList',
        'Webed.view.ContentTabs',
        'Webed.view.StatusBar'
    ],

    items: [{
        layout: 'border',
        items: [{
            border: false,
            region: 'west',
            title: 'Projects',
            collapsible: true,
            split: true,
            minWidth: 281,
            flex: 1,

            tools: [{
                type: 'refresh',
                tooltip: '<p>Refresh</p>',
                action: 'node-tree:refresh'
            },{
                type: 'help',
                tooltip: '<p>Project Tree</p>'
            }],

            layout: 'border',
            items: [{
                region: 'center',
                xtype: 'node-tree',
                flex: 1
            },{
                region: 'south',
                xtype: 'leaf-list',
                title: 'Documents',
                collapsible: true,
                collapseMode: 'header',
                split: true,
                flex: 1,

                tools: [{
                    type: 'refresh',
                    tooltip: '<p>Refresh</p>',
                    action: 'leaf-list:refresh'
                },{
                    type: 'help',
                    tooltip: '<p>Document List</p>'
                }]
            }]
        },{
            region: 'center',
            flex: 4,

            layout: 'border',
            items: [{
                border: false,
                region: 'center',
                xtype: 'content-tabs',
                tabPosition: 'bottom',
                flex: 4,

                tbar: {
                    xtype: 'main-bar'
                }
            }],

            bbar: {
                xtype: 'status-bar'
            }
        }]
    }],

    listeners: {
        afterlayout: function () {
            var ld = Ext.get ('load-progress');
            if (ld) ld.destroy ();
        }
    }
});
