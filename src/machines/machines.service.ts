import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machine } from '../entities/machine.entity';

@Injectable()
export class MachinesService {
  constructor(@InjectRepository(Machine) private repo: Repository<Machine>) {}

  async findAll() {
    return this.repo.find();
  }

  async create(data: Partial<Machine>) {
    return this.repo.save(data);
  }
}
