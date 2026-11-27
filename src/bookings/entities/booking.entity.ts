import {
Column,
CreateDateColumn,
Entity,
ManyToOne,
OneToMany,
PrimaryGeneratedColumn,
JoinColumn,
} from 'typeorm';

import { Showing } from '../../showings/entities/showing.entity.js';
import { BookingSeat } from './booking-seat.entity.js';

@Entity('bookings')
export class Booking {
@PrimaryGeneratedColumn('uuid')
id!: string;

@Column({ name: 'showing_id', type: 'uuid', nullable: false })
showingId!: string;

@Column({ name: 'total_price', type: 'integer', nullable: false })
totalPrice!: number;

@CreateDateColumn({
name: 'created_at',
type: 'timestamptz',
default: () => 'now()',
})
createdAt!: Date;

@ManyToOne(() => Showing, (showing) => showing.bookings, {
nullable: false,
onDelete: 'RESTRICT',
})
@JoinColumn({ name: 'showing_id' })
showing!: Showing;

@OneToMany(() => BookingSeat, (bookingSeat) => bookingSeat.booking)
seats!: BookingSeat[];
}