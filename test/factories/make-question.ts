import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  type QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: 'Example',
    content: 'Question content',
    ...override,
  })

  return question
}
