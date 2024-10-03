import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

@Module({
  imports: [HttpModule],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
