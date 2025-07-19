import { Controller, Get, Post, Body } from '@nestjs/common';
import { MachinesService } from './machines.service';

@Controller('machines')
export class MachinesController {
  constructor(private readonly service: MachinesService) {}
  @Get() async findAll() { return this.service.findAll(); }
  @Post() async create(@Body() dto: any) { return this.service.create(dto); }
}
