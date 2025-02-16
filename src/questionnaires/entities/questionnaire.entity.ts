import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionnaireJunction } from './questionnaire_junction.entity';

@Entity('questionnaires')
export class Questionnaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => QuestionnaireJunction, (junction) => junction.questionnaire)
  questions: QuestionnaireJunction[];
}
