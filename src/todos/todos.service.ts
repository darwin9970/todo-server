import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosEntity } from './entities/todos.entity';
import { TodoDto } from './dto/todo.dto';
import { ChangeStatusDto } from './dto/changeStatus-dto';
@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private readonly todosRepository: Repository<TodosEntity>,
  ) {}

  // 查询任务
  async findAll() {
    return await this.todosRepository.find();
  }

  // 查询单个任务
  async findOneById(id: number) {
    return await this.todosRepository.findOne({ where: { id } });
  }

  // 添加任务
  async addTodo(createTodoDto: TodoDto) {
    const todo = new TodosEntity();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    return await this.todosRepository.save(todo);
  }

  // 更新任务
  async updateTodoById(createTodoDto: TodoDto) {
    const todo = new TodosEntity();
    todo.id = createTodoDto.id;
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    return await this.todosRepository.save(todo);
  }

  // 修改任务状态
  async updateTodoStatusById(changeStatusDto: ChangeStatusDto) {
    const todo = new TodosEntity();
    todo.id = changeStatusDto.id;
    todo.status = changeStatusDto.status;
    return await this.todosRepository.save(todo);
  }

  // 删除任务
  async deleteTodoById(id: number) {
    return await this.todosRepository.delete(id);
  }
}
