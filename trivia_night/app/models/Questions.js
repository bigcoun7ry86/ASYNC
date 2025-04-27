import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";

export class Question {
  constructor(data) {
    this.id = generateId()
    this.difficulty = data.difficulty
    this.type = data.type
    this.category = data.category
    this.question = data.question
    this.answer = data.correct_answer
    // + any other data the trivia api includes you want to keep
  }
}
