import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { Role } from '../../configs/role.enum';
import { ValidationDto } from 'src/pipes/validationDto.pipe';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryService } from './history.service';
import { UpdateHistoryDto } from './dto/update-history.dto';

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

  @Get('list')
  async getAll() {
    const response = await this.historyServices.getAllHistories();
    return response;
  }

  @Get(':id')
  async getHistory(@Param() params) {
    const response = await this.historyServices.getHistoryById(params.id);
    return response;
  }

  @Get('list/category/:id')
  async getHistoriesByCategory(@Param() params) {
    console.log(params);

    const response = await this.historyServices.getHistoriesByCategory(
      params.id,
    );
    return response;
  }

  @Roles(Role.READ)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('update/:id')
  async update(
    @Body(new ValidationDto()) updateHistoryDto: UpdateHistoryDto,
    @Param() params,
  ) {
    const response = await this.historyServices.update(
      updateHistoryDto,
      params.id,
    );
    return response;
  }

  @Roles(Role.READ)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('delete/:id')
  async delete(@Param() params) {
    const response = await this.historyServices.delete(params.id);
    return response;
  }
}
