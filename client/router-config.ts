import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './todos/new.component';
import { TodoDetailsComponent } from './todos/details.component';

export const routerConfig = [
    {
        path: 'todos',
        children: [
            {
                path: 'all',
                component: TodosComponent
            },{
                path: 'id/:id',
                component: TodoDetailsComponent
            },{
                path: 'id/:id/edit',
                component: NewTodoComponent
            },{
                path: 'new',
                component: NewTodoComponent
            }
        ]
    }, 
]