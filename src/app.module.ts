import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, UsersModule],
  providers: [],
})
export class AppModule {}
