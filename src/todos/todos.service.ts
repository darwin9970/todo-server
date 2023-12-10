import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosEntity } from './entities/todos.entity';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { ChangeStatusDto } from './dto/changeStatus-dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private readonly todosRepository: Repository<TodosEntity>,
  ) {}

  /**
   * 查询所有任务
   * @memberof TodosController
   */
  async findAll() {
    return await this.todosRepository.find();
  }

  /**
   * 查询单个任务
   * @param id - 任务ID
   */
  async findOneById(id: number) {
    return await this.todosRepository.findOne({ where: { id } });
  }

  /**
   * 添加任务
   * @param createTodoDto - 创建任务参数
   */
  async addTodo(createTodoDto: CreateDto) {
    const todo = new TodosEntity();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    return await this.todosRepository.save(todo);
  }

  /**
   * 更新任务
   * @param updateDto - 更新任务参数
   */
  async updateTodoById(updateDto: UpdateDto) {
    const todo = new TodosEntity();
    todo.id = updateDto.id;
    todo.title = updateDto.title;
    todo.description = updateDto.description;
    return await this.todosRepository.save(todo);
  }

  /**
   * 修改任务状态
   * @param changeStatusDto - 修改任务状态参数
   */
  async updateTodoStatusById(changeStatusDto: ChangeStatusDto) {
    const todo = new TodosEntity();
    todo.id = changeStatusDto.id;
    todo.status = changeStatusDto.status;
    return await this.todosRepository.save(todo);
  }

  /**
   * 删除任务
   * @param id - 任务ID
   */
  async deleteTodoById(id: number) {
    return await this.todosRepository.delete(id);
  }
}
