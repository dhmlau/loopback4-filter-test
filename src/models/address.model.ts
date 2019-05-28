import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Address extends Entity {
  @property({
    type: 'array',
    itemType: 'string',
  })
  cities?: string[];

  constructor(data?: Partial<Address>) {
    super(data);
  }
}
