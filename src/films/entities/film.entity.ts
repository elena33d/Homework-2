import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Showing } from '../../showings/entities/showing.entity.js';

@Entity('films')
export class Film {
@PrimaryGeneratedColumn('uuid')
id!: string;

@Column({ type: 'varchar', nullable: false })
title!: string;

@Column({ name: 'duration_minutes', type: 'integer', nullable: false })
durationMinutes!: number;

@Column({ name: 'release_year', type: 'integer', nullable: false })
releaseYear!: number;

@OneToMany(() => Showing, (showing) => showing.film)
showings!: Showing[];
}