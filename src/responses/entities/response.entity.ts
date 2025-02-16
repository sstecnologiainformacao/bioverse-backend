import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../../questionnaires/entities/question.entity';
import { Questionnaire } from '../../questionnaires/entities/questionnaire.entity';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Questionnaire)
  questionnaire: Questionnaire;

  @ManyToOne(() => Question)
  question: Question;

  @Column()
  username: string;

  @Column({ type: 'jsonb' })
  answer: object;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
