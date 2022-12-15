// import css
import css from './style.scss';
import * as bootstrap from 'bootstrap';

// import untuk javascript
import { run } from './app/app.js';
import { AlertService } from './app/alert.service.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

// alert(' selamat datang.. Semoga harimu menyenangkan')