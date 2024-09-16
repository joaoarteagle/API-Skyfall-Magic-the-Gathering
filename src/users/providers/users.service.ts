import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL') 
    private userMOdel: Model<User>,
  ){}


//function create user
 async create(createUserDto: CreateUserDto): Promise<User> {
  const createdUser = new this.userMOdel(createUserDto);
    return createdUser.save();
  }

  //Function to find all users
  async findAll():Promise<User[]> {
    return this.userMOdel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
