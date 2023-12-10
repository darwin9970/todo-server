import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { ChangeStatusDto } from './dto/changeStatus-dto';

@ApiTags('任务')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  /**
   * 查询任务
   * @memberof TodosController
   */
  @ApiOperation({ summary: '查询所有任务' })
  @Get()
  async get() {
    return await this.todosService.findAll();
  }

  /**
   * 查询单个任务
   * @param id - 任务ID
   * @memberof TodosController
   */
  @ApiOperation({ summary: '查询单个任务' })
  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return await this.todosService.findOneById(id);
  }

  /**
   * 创建任务
   * @param body - 创建任务参数
   * @memberof TodosController
   */
  @ApiOperation({ summary: '创建任务' })
  @Post()
  async add(@Body() body: CreateDto) {
    return await this.todosService.addTodo(body);
  }

  /**
   * 更新任务
   * @param body - 更新任务参数
   */
  @ApiOperation({ summary: '更新任务' })
  @Put('')
  async update(@Body() body: UpdateDto) {
    return await this.todosService.updateTodoById(body);
  }

  /**
   * 修改任务状态
   * @param body - 修改任务状态参数
   * @memberof TodosController
   */
  @ApiOperation({ summary: '修改任务状态' })
  @Patch('')
  async updateStatus(@Body() body: ChangeStatusDto) {
    return await this.todosService.updateTodoStatusById(body);
  }

  /**
   * 删除任务
   * @param id - 任务ID
   */
  @ApiOperation({ summary: '删除任务' })
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.todosService.deleteTodoById(id);
  }
}
