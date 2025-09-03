import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
id: number;
title: string;
status: string;  // "pending" atau "done"
}

@Injectable()
export class TodoService {
private todos: Todo[] = [];
private idCounter = 1;

findAll(): Todo[] {
    return this.todos;
}

findOne(id: number): Todo {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);
    return todo;
}

create(title: string, status: string): Todo {
    const newTodo: Todo = {
    id: this.idCounter++,
    title,
    status,
    };
    this.todos.push(newTodo);
    return newTodo;
}

update(id: number, title?: string, status?: string): Todo | undefined {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) return undefined;
    if (title !== undefined) todo.title = title;
    if (status !== undefined) todo.status = status;
    return todo;
}

remove(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException(`Todo with id ${id} not found`);
    this.todos.splice(index, 1);
}
}
