// src/todos/dto/create-todo.dot.ts
import { ApiProperty } from '@nestjs/swagger';

export class ChangeStatusDto {
  @ApiProperty({ description: '任务ID' })
  readonly id: number;

  @ApiProperty({ description: '任务状态' })
  readonly status: 0 | 1; // 0: 待办 1: 完成
}
