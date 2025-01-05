import { Entity } from '../../core/entities/entity'
import type { UniqueEntityID } from '../../core/entities/unique-entity-id'

interface AnswerProps {
  content: string
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}
