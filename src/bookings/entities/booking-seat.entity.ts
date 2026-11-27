import {
Column,
Entity,
Index,
JoinColumn,
ManyToOne,
PrimaryGeneratedColumn,
} from 'typeorm';

import { Booking } from './booking.entity.js';
import { Showing } from '../../showings/entities/showing.entity.js';

@Entity('booking_seats')
@Index(
'UQ_booking_seats_showing_row_seat',
['showingId', 'row', 'seat'],
{ unique: true },
)
export class BookingSeat {
@PrimaryGeneratedColumn('uuid')
id!: string;

@Column({ name: 'booking_id', type: 'uuid', nullable: false })
bookingId!: string;

@Column({ name: 'showing_id', type: 'uuid', nullable: false })
showingId!: string;

@Column({ type: 'integer', nullable: false })
row!: number;

@Column({ type: 'integer', nullable: false })
seat!: number;

@ManyToOne(() => Booking, (booking) => booking.seats, {
nullable: false,
onDelete: 'CASCADE',
})
@JoinColumn({ name: 'booking_id' })
booking!: Booking;

@ManyToOne(() => Showing, (showing) => showing.bookingSeats, {
nullable: false,
onDelete: 'RESTRICT',
})
@JoinColumn({ name: 'showing_id' })
showing!: Showing;
}