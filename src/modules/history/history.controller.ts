import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { Role } from '../../configs/role.enum';
import { ValidationDto } from 'src/pipes/validationDto.pipe';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private historyServices: HistoryService) {}

  @Roles(Role.READ)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create')
  async create(
    @Body(new ValidationDto()) createHistoryDto: CreateHistoryDto,
    @Req() req,
  ) {
    const response = await this.historyServices.create(
      createHistoryDto,
      req.user,
    );
    return response;
  }

  @Roles(Role.READ)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('my-histories')
  async getMyHistories(@Req() req) {
    const response = await this.historyServices.getMyHistories(req.user);
    return response;
  }
}
