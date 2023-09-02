import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Board])],
  providers: [BoardService],
  controllers: [BoardController],
  exports: [BoardService],
})
export class BoardModule {}
