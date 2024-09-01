import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customeuser {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    age: number
    @Column()
    addr: string
    @Column()
    birth: string
    @Column()
    gender: string
}
