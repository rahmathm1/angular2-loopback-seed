import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoComponent } from './todo/todo.component';

export const routerConfig = [
    {
        path: 'todos',
        children: [
            {
                path: 'all',
                component: TodosComponent
            },{
                path: 'id/:id',
                component: TodoComponent
            },{
                path: 'new',
                component: NewTodoComponent
            }
        ]
    }, 
]