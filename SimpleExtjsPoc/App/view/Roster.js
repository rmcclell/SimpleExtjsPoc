﻿Ext.define('App.view.Roster', {
    extend: 'Ext.grid.Panel',
    title: 'Roster',
    alias: 'widget.roster',
    store: 'roster',
    tbar: [{
        xtype: 'button',
        text: 'Add Player',
        itemId: 'add',
        iconCls: 'x-fa fa-plus green'
    }],
    selModel: {
        selType: 'rowmodel',
        pruneRemoved: false
    },
    plugins: [{
        ptype: 'gridfilters'
    }, {
        ptype: 'rowediting',
        clicksToEdit: 2
    }],
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        groupers: [{
            property: 'category'//,
            //groupFn: function (val) {
            //    return val.data.name;
            //}
        }]
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [{
            text: 'Id',
            dataIndex: 'id',
            hidden: true,
            filter: { type: 'string' }
    }, {
            width: 90,
            style: 'text-align:right;',
            align: 'right',
            text: 'Number',
            dataIndex: 'number',
            editor: 'numberfield',
            filter: { type: 'number' }
    }, {
        width: 100,
        text: 'Picture',
        dataIndex: 'pictureCls',
        renderer: function (value, metaData) {
            if (metaData) { metaData.tdCls = value; } return value;
        },
        editRenderer: function (value) {
            return Ext.String.format('<div class="{0}"></div>', value);
        }
    }, {
        flex: 1,
        text: 'Player Name',
        cellWrap: true,
        dataIndex: 'playerName',
        editor: 'textfield',
        filter: { type: 'string' }
    }, {
        flex: 1,
        text: 'Position(s)',
        cellWrap: true,
        dataIndex: 'pos',
        renderer: function (value) {
            return value.replace(/\//g, ' / ');
        },
        editor: {
            xtype: 'tagfield',
            grow: true,
            growMax: 80,
            hideTrigger: true,
            delimiter: '/',
            store: ['1B', '3B', '2B', 'C', 'CF', 'LF', 'RF', 'RP', 'P', 'CL', 'SP', 'SS']
        },
        filter: {
            type: 'list',
            options: ['1B', '3B', '2B', 'C', 'CF', 'LF', 'RF', 'RP', 'P', 'CL', 'SP', 'SS']
        }
    }, {
        width: 160,
        text: 'Arms',
        columns: [{
            width: 80,
            text: 'Batting',
            dataIndex: 'batArm',
            align: 'center',
            editor: {
                xtype: 'combo',
                store: ['L', 'R', 'S']
            },
            filter: {
                type: 'list',
                options: ['R', 'L', 'S']
            }
        }, {
            width: 80,
            text: 'Throw',
            dataIndex: 'throwArm',
            align: 'center',
            editor: {
                xtype: 'combo',
                store: ['L', 'R', 'S']
            },
            filter: {
                type: 'list',
                options: ['R', 'L', 'S']
            }
        }]
    }, {
        width: 80,
        text: 'Height',
        dataIndex: 'height',
        style: 'text-align:right;',
        align: 'right',
        editor: {
            xtype: 'combo',
            store: ['5\' 0"', '5\' 1"', '5\' 2"', '5\' 3"', '5\' 4"', '5\' 5"', '5\' 6"', '5\' 7"', '5\' 8"', '5\' 9"', '5\' 10"', '5\' 11"', '6\' 0"', '6\' 1"', '6\' 2"', '6\' 3"', '6\' 4"', '6\' 5"', '6\' 6"', '6\' 7"', '6\' 8"', '6\' 9"', '6\' 10"', '6\' 11"']
        },
        filter: {
            type: 'list',
            options: ['5\' 0"', '5\' 1"', '5\' 2"', '5\' 3"', '5\' 4"', '5\' 5"', '5\' 6"', '5\' 7"', '5\' 8"', '5\' 9"', '5\' 10"', '5\' 11"', '6\' 0"', '6\' 1"', '6\' 2"', '6\' 3"', '6\' 4"', '6\' 5"', '6\' 6"', '6\' 7"', '6\' 8"', '6\' 9"', '6\' 10"', '6\' 11"']
        }
    }, {
        width: 85,
        text: 'Weight',
        dataIndex: 'weight',
        style: 'text-align:right;',
        align: 'right',
        editor: 'numberfield',
        filter: {
            type: 'number'
        }
    }, {
        width: 65,
        text: 'Age',
        dataIndex: 'age',
        style: 'text-align:right;',
        align: 'right',
        editor: 'numberfield',
        filter: {
            type: 'number'
        }
    }, {
        width: 110,
        text: 'Experience',
        dataIndex: 'experience',
        style: 'text-align:right;',
        align: 'right',
        editor: 'numberfield',
        filter: {
            type: 'number'
        },
        renderer: function (value) {
            return (value === 0) ? 'R' : value;
        }
    }, {
        flex: 1,
        cellWrap: true,
        text: 'Birthplace',
        dataIndex: 'birthplace',
        editor: 'textfield',
        filter: {
            type: 'string'
        }
    }, {
        flex: 1,
        cellWrap: true,
        text: 'College',
        dataIndex: 'college',
        editor: {
            xtype: 'combo',
            store: ['Connecticut', 'East Carolina', 'Evansville', 'Georgia Tech', 'Kentucky', 'LSU', 'None', 'Northeastern', 'Oklahoma', 'Oregon', 'Rollins', 'Southern Nevada CC', 'Texas Tech', 'UCLA', 'Virginia', 'Western Carolina']
        }, filter: {
            type: 'list'
        }
    }, {
        width: 100,
        text: 'Salary',
        dataIndex: 'salary',
        style: 'text-align:right;',
        align: 'right',
        editor: 'numberfield',
        formatter: 'currency',
        filter: {
            type: 'number'
        }
    }, {
        width: 100,
        text: 'Category',
        dataIndex: 'category',
        editor: {
            xtype: 'combo',
            store: ['Catchers', 'Pitchers', 'Infielders', 'Outfielders']
        },
        filter: {
            type: 'list'
        }
    }, {
        xtype: 'actioncolumn',
        width: 50, menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'x-fa fa-pencil yellow',
            tooltip: 'Edit Row',
            handler: function (view, rowIndex, colIndex, item, e, record, row) {
                this.fireEvent('editaction', view, rowIndex, colIndex, item, e, record, row);
            }
        }, {
            iconCls: 'x-fa fa-remove red',
            tooltip: 'Remove Row',
            handler: function (view, rowIndex, colIndex, item, e, record, row) {
                this.fireEvent('deleteaction', view, rowIndex, colIndex, item, e, record, row);
            }
        }]
    }]
});