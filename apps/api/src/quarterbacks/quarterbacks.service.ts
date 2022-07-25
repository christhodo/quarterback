import { Quarterback } from '@quarterback-angular/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QuarterbacksService {
  mockQuarterbacks: Quarterback[] = [
    {
      id: '1',
      title: 'Nest Quarterback 01',
      description: 'This is a Nest quarterback',
    },
    {
      id: '2',
      title: 'Nest Quarterback 02',
      description: 'This is a Nest quarterback',
    },
    {
      id: '3',
      title: 'Nest Quarterback 03',
      description: 'This is a Nest quarterback',
    },
  ];

  findAll() {
    return this.mockQuarterbacks;
  }

  findOne(id: string) {
    return this.mockQuarterbacks.find((quarterback) => quarterback.id === id);
  }

  create(quarterback: Quarterback) {
    this.mockQuarterbacks = [
      ...this.mockQuarterbacks,
      Object.assign({}, quarterback, { id: uuidv4() }),
    ];
    return this.mockQuarterbacks;
  }

  update(id: string, quarterback: Quarterback) {
    this.mockQuarterbacks = this.mockQuarterbacks.map((w) =>
      w.id === id ? quarterback : w
    );
    return this.mockQuarterbacks;
  }

  remove(id: string) {
    this.mockQuarterbacks = this.mockQuarterbacks.filter(
      (quarterback) => quarterback.id !== id
    );
    return this.mockQuarterbacks;
  }
}
