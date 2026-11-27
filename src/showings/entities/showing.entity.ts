import {
Column,
Entity,
ManyToOne,
OneToMany,
PrimaryGeneratedColumn,
JoinColumn,
} from 'typeorm';

import { Film } from '../../films/entities/film.entity.js';
import { Hall } from '../../halls/entities/hall.entity.js';
import { Booking } from '../../bookings/entities/booking.entity.js';
import { BookingSeat } from '../../bookings/entities/booking-seat.entity.js';

@Entity('showings')
export class Showing {
@PrimaryGeneratedColumn('uuid')
id!: string;

@Column({ name: 'film_id', type: 'uuid', nullable: false })
filmId!: string;

@Column({ name: 'hall_id', type: 'uuid', nullable: false })
hallId!: string;

@Column({ name: 'starts_at', type: 'timestamptz', nullable: false })
startsAt!: Date;

@Column({ type: 'integer', nullable: false })
price!: number;

@ManyToOne(() => Film, (film) => film.showings, {
nullable: false,
onDelete: 'RESTRICT',
})
@JoinColumn({ name: 'film_id' })
film!: Film;

@ManyToOne(() => Hall, (hall) => hall.showings, {
nullable: false,
onDelete: 'RESTRICT',
})
@JoinColumn({ name: 'hall_id' })
hall!: Hall;

@OneToMany(() => Booking, (booking) => booking.showing)
bookings!: Booking[];

@OneToMany(() => BookingSeat, (bookingSeat) => bookingSeat.showing)
bookingSeats!: BookingSeat[];
}