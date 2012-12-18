Ext.define ('Webed.controller.Property', {
    extend: 'Ext.app.Controller',

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    models: ['Property'],
    stores: ['Properties'],

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    init: function () {
        this.application.on ({
            set_property: this.set_property, scope: this
        });

        this.application.on ({
            get_property: this.get_property, scope: this
        });
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    set_property: function (source, args) {
        if (source == this) return;

        assert (args);
        assert (args.property);
        assert (args.property.length >= 0);

        for (var index in args.property) {
            var property = args.property[index];

            assert (property);
            assert (property.node_uuid);
            assert (property.uuid||true);
            assert (property.type);
            assert (property.mime);
            assert (property.name);
            assert (property.data||true);

            var model = Ext.create ('Webed.model.Property', property);
            assert (model);

            var model = model.save ({
                scope: args.scope||this, callback: function (rec, op) {
                    if (args.callback && args.callback.call) {
                        args.callback.call (args.scope||this, rec, op, index);
                    }
                }
            });

            assert (model);
        }
    },

    get_property: function (source, args) {
        if (source == this) return;

        assert (args);
        assert (args.property);
        assert (args.property.length >= 0);
        assert (args.callback);
        assert (args.callback.call);

        var store = this.getPropertiesStore ();
        assert (store);

        Ext.Array.each (args.property, function (object, index) {
            store.load ({
                scope: args.scope||this, callback: function (recs) {
                    args.callback.call (args.scope||this, recs, index);
                }, params: object
            });
        });
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
});
