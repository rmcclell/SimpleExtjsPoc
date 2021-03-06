﻿Ext.define('App.model.Roster', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { type: 'int', name: 'id' },
        { type: 'int', name: 'number' },
        { type: 'string', name: 'pictureCls', critical: false, persist: false },
        { type: 'string', name: 'playerName' },
        { type: 'string', name: 'pos' },
        { type: 'string', name: 'batArm', defaultValue: 'R' },
        { type: 'string', name: 'throwArm', defaultValue: 'R' },
        { type: 'string', name: 'height' },
        { type: 'int', name: 'weight' },
        { type: 'int', name: 'age' },
        { type: 'int', name: 'experience' },
        { type: 'string', name: 'birthplace' },
        { type: 'string', name: 'college', defaultValue: 'None' },
        { type: 'int', name: 'salary' },
        { type: 'string', name: 'category', defaultValue: 'Outfielders' }
    ],
    proxy: {
        type: 'rest',
        url: window.location.protocol + '//' + window.location.host + '/api/Roster',
        noCache: false,
        simpleGroupMode: true,
        simpleSortMode: true,
        startParam: '',
        reader: { type: 'json', rootProperty: 'items', totalProperty: 'totalCount' },
        writer: { type: 'json', allowSingle: true }
    }
});