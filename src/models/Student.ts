import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from 'typeorm';

import Peaple from './Peaple';

@Entity('student')
class Student{
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  person_id: string;

  @OneToOne(() => Peaple)
  @JoinColumn({ name: 'person_id' })
  person: Peaple;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;