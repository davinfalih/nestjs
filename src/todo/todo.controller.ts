import { Controller, Get, Post, Param, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { TodoService, Todo } from './todo.service';

@Controller('todos')
export class TodoController {
constructor(private readonly todoService: TodoService) {}

@Get()
getAll() {
    status : 'done';
    status : 'pending';
    message : 'data successfully retrieved';
    data : this.todoService.findAll();
}

@Get(':id')
getOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOne(id);
}

@Post()
create(@Body() body: { title: string; status: string }){
    return this.todoService.create(body.title, body.status);
}

@Put(':id')
update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title?: string; status?: string },
) {
    return this.todoService.update(id, body.title, body.status);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number): void {
    return this.todoService.remove(id);
}
}
