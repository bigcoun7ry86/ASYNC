import { questionsController } from './controllers/questionsController.js';
import { categoryController } from "./controllers/categoryController.js";
class App {

  questionsController = new questionsController()
  categoryController = new categoryController()
}

window['app'] = new App()


