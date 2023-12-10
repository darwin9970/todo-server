// src/todos/dto/create-todo.dot.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  // @ApiProperty({ description: '任务ID' })
  // readonly id?: number;

  @ApiProperty({ description: '任务标题' })
  readonly title: string;

  @ApiProperty({ description: '任务详细描述' })
  readonly description: string;

  @ApiProperty({ description: '任务状态' })
  readonly status?: 0 | 1 | 2; // 0: 待办 1: 完成 2: 删除
}
