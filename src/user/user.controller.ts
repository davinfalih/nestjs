import { Controller, Get, Param, Post, Put ,Req, Query, Delete } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}

    @Get('all')
    findAll(@Req() request: Request) {
        return this.UserService.findAll();
    }

    @Get(':name')
    findOne(@Param('name') name: string): string {
        return `This action returns ${name} user`;
    }

    @Post()
    create(): string {
    return 'this action adds a new user';
    }

    @Put(':id')
    update(@Param('id') id: string): string {
        return `this action updates a #${id} user`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `this action removes a #${id} user`;
    }

    @Get()
    find(@Query('breed') breed: string, @Query('age') age: number): string {
        return `This action returns user filtered by age: ${age} and breed ${breed}`;
}


}