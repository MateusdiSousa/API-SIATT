import { ReuniaoEntity } from "src/reuniao/entities/reuniao.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class SalaPresencialEntity {

    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    identificacao : string

    @Column()
    permissao : number

    @Column()
    ocupacaoMax : number

    @Column()
    local : string

    @OneToMany(() => ReuniaoEntity, reuniao => reuniao.salaPresencial)
    reunioes : ReuniaoEntity[]
}