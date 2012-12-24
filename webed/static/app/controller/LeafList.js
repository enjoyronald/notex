Ext.define ('Webed.controller.LeafList', {
    extend: 'Ext.app.Controller',

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    models: ['Leaf'],
    stores: ['Leafs'],

    refs: [{
        selector: 'leaf-list', ref: 'leafList'
    }],

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    init: function () {
        this.control ({
            'leaf-list tool[action=refresh]': { click: this.refresh },
            'leaf-list tool[action=settings]': { click: this.settings },
            'leaf-list': { itemclick: this.itemclick }
        });
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    settings: function () {
        console.debug ('[LeafList.settings]');
    },

    refresh: function () {
        var view = this.getLeafList ();
        assert (view);
        var semo = view.getSelectionModel ();
        assert (semo);
        var store = this.getLeafsStore ();
        assert (store);

        var leaf = semo.getLastSelected ();
        if (leaf) {
            store.load ({
                scope: this, callback: function (recs, op) {
                    if (recs && recs.length > 0 && op && op.success) {
                        var uuid = leaf.get ('uuid');
                        assert (uuid);

                        Ext.Array.each (recs, function (rec, index) {
                            if (rec.get ('uuid') == uuid) {
                                semo.select (index); return false;
                            }
                        });
                    }
                }
            });
        } else {
            store.load ();
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    itemclick: function (view, record, item, index, e, eOpts) {
        var semo = view.getSelectionModel ();
        assert (semo);
        var leaf = semo.getLastSelected ();
        assert (leaf);

        var lhs_uuid = leaf.get ('uuid');
        assert (lhs_uuid);
        var rhs_uuid = record.get ('uuid');
        assert (rhs_uuid);

        if (lhs_uuid == rhs_uuid) {
            this.application.fireEvent ('create_tab', this, {
                record: record
            });
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
});
