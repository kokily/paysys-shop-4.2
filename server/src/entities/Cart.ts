import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InputItem } from '../@types/global';
import { User } from './User';
import { Bill } from './Bill';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'jsonb' })
  items!: [InputItem];

  @Column({ type: 'boolean', default: false })
  completed!: boolean;

  @Column({ type: 'boolean', default: false })
  deleted!: boolean;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;

  @Column({ type: 'timestamptz' })
  @UpdateDateColumn()
  updated_at!: Date;

  // Relations
  @Column({ nullable: true })
  user_id!: string;

  @ManyToOne((type) => User, (user) => user.carts)
  user!: User;

  @Column({ nullable: true })
  bill_id!: string;

  @OneToOne((type) => Bill, (bill) => bill.cart_id)
  bill!: Bill;
}
