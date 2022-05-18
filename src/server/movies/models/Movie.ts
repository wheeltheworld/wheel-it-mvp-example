import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field, Form } from "wheel-it/server";

@Form()
@Entity()
export class Movie extends BaseEntity {
  @Field({
    isReadonly: true,
    indexable: true,
    isSearchable: true,
    type: "int",
    label: "ID",
  })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ indexable: true, isSearchable: true, label: "Title" })
  @Column()
  title!: string;

  @Field({ isSearchable: true, label: "Description" })
  @Column()
  description!: string;

  @Field({ isListable: false, type: "date", label: "Release Date" })
  @Column({ nullable: true })
  releaseDate!: Date;

  @Field({ type: "float", label: "Stars of rating" })
  @Column({ type: "float", nullable: true })
  rating!: number;

  @Field({ type: "int", label: "Minutes of duration" })
  @Column()
  duration!: number;

  @Field({ isReadonly: true, type: "date", label: "Created At" })
  @CreateDateColumn()
  createdAt!: Date;

  @Field({ isReadonly: true, type: "date", label: "Updated At" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
