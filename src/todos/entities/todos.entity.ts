import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodosEntity {
  // 主键ID
  @PrimaryGeneratedColumn()
  id: number;

  // 任务标题
  @Column()
  title: string;

  // 任务描述
  @Column()
  description: string;

  // 任务状态 0: 待办 1: 完成
  @Column({ type: 'int', default: 0 })
  status: number;

  // 创建时间
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  // 更新时间
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
