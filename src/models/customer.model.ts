import {Entity, model, property} from '@loopback/repository';
import {Address} from './address.model';

@model({settings: {}})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  custid?: string;

  @property({
    type: 'string',
  })
  custname?: string;

  @property.array(Address, {required: false})
  address?: Address[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
