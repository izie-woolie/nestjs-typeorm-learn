import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Controller('api/users')
export class UsersController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  @Get()
  getUsers() {}

  @Post()
  createUser() {}
}
