import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    apiEndpoint: string;
    http: Http;

    constructor(http: Http) {
        this.http = http;
        this.apiEndpoint = '/api/items';
    }

    create(todo: Todo) {
        return this.http.post(this.apiEndpoint, todo);
    }

    delete(todo: Todo) {
        return this.http.delete(this.apiEndpoint + "/" + todo.id);
    }

    update(todo: Todo) {
        return this.http.put(this.apiEndpoint, todo);
    }

    get(id: string) {
        return this.http.get(this.apiEndpoint + "/" + id);
    }

    getAll() {
        return this.http.get(this.apiEndpoint);
    }
}