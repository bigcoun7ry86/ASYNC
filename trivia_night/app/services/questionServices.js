import { AppState } from "../AppState.js";
import { Question } from "../models/Questions.js";
import { triviaAPI } from "./axiosService.js";

class QuestionServices {

  async getQuestions() {
    // const response = await fetch(triviaAPI)
    // console.log(response)
    // const questionData = await response.json()
    // console.log(questionData)
    const response = await triviaAPI.get('api.php?amount=10')
    console.log('got question', response.data)

  }

}






export const questionServices = new QuestionServices()