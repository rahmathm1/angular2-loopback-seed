"use strict";
var todos_component_1 = require('./todos/todos.component');
var new_component_1 = require('./todos/new.component');
var details_component_1 = require('./todos/details.component');
exports.routerConfig = [
    {
        path: 'todos',
        children: [
            {
                path: 'all',
                component: todos_component_1.TodosComponent
            }, {
                path: 'id/:id',
                component: details_component_1.TodoDetailsComponent
            }, {
                path: 'id/:id/edit',
                component: new_component_1.NewTodoComponent
            }, {
                path: 'new',
                component: new_component_1.NewTodoComponent
            }
        ]
    },
];
//# sourceMappingURL=router-config.js.map