import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Showing } from '../../showings/entities/showing.entity.js';

@Entity('halls')
export class Hall {
@PrimaryGeneratedColumn('uuid')
id!: string;

@Column({ type: 'varchar', unique: true, nullable: false })
name!: string;

@Column({ type: 'integer', nullable: false })
rows!: number;

@Column({ name: 'seats_per_row', type: 'integer', nullable: false })
seatsPerRow!: number;

@OneToMany(() => Showing, (showing) => showing.hall)
showings!: Showing[];
}