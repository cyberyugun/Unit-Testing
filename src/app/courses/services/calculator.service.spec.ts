import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import { TestBed } from '@angular/core/testing';
describe('CalculatorService',()=>{

    // to hide repeat variable
    let calculator :CalculatorService,
        logger:any;

    beforeEach(()=>{
        logger = jasmine.createSpyObj('LoggerService',['log']);

        TestBed.configureTestingModule({
            providers:[
                CalculatorService,
                {provide:LoggerService,useValue:logger}
            ]
        })

        calculator = TestBed.get(CalculatorService)
        // calculator = new CalculatorService(logger);
    })

    it('should add two numbers',()=>{
        // const logger = jasmine.createSpyObj('LoggerService',['log']);

        // ---------------//
        // const logger = new LoggerService();

        // spyOn(logger,"log");
        // calculator = new CalculatorService(logger);
        // -----------------//

        const result = calculator.add(2,2);

        expect(result).toBe(4);

        expect(logger.log).toHaveBeenCalledTimes(1)
    })

    it('should substract two numbers',()=>{

        // const logger = jasmine.createSpyObj('LoggerService',['log']);

        // const calculator = new CalculatorService(logger);

        const result = calculator.subtract(2,2);

        expect(result).toBe(0,"unexpected substract result");

        expect(logger.log).toHaveBeenCalledTimes(1)
    })
})