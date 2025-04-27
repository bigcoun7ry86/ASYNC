import { AppState } from "../AppState.js";
import { questionServices } from "../services/questionServices.js";



export class questionsController {
  constructor() {
    console.log('?🎮')
    this.getQuestions()
  }


  async getQuestions() {
    await questionServices.getQuestions()

  }

}