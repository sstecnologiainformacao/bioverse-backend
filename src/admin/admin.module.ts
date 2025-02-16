import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesModule } from 'src/responses/responses.module';

@Module({
  imports: [TypeOrmModule.forFeature([Response]), ResponsesModule],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [TypeOrmModule],
})
export class AdminModule {}
