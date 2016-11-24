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

    delete(todo: Todo) {
        return this.http.delete(this.apiEndpoint + "/" + todo.id);
    }

    save(todo: Todo) {
        if(todo.id)
            return this.http.put(this.apiEndpoint, todo);
        else
            return this.http.post(this.apiEndpoint, todo);
    }

    get(id: string) {
        return this.http.get(this.apiEndpoint + "/" + id);
    }

    getAll(page: number, pageSize: number) {
        let offset: number =  (page-1) * pageSize;
        let  url: string = this.apiEndpoint + '?filter[limit]='+ pageSize +'&filter[offset]=' + offset;
        return this.http.get(url);
    }

    getCount(status: boolean = undefined) {
        if(status)
            return this.http.get(this.apiEndpoint + "/count?where[status]=" + status);
        else
            return this.http.get(this.apiEndpoint + "/count");
    }
}