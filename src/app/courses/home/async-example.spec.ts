import { fakeAsync, tick, flush, flushMicrotasks } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

describe("Async Testing Examples",()=>{

    it("Asynchronous test example with Jasmine done()",(done:DoneFn)=>{
        let test = false;
        setTimeout(() => {
            console.log("running assertion done()");
            
            test = true;
            expect(test).toBeTruthy();
            done();
        }, 1000);
        
    });

    it("Asynchronous test example -setTimeout",fakeAsync(()=>{
        let test = false;
        let a=false;
        setTimeout(() => {
            a = true;
            console.log('a');
            
        }, 2000);
        
        setTimeout(() => {
            console.log("running assertion setTimeout");
            
            test = true;
        }, 1000);


        flush();
        // tick(1000);
        expect(test).toBeTruthy();
        expect(a).toBeTruthy();
    }));

    it("Asynchronous test example with plain promise",fakeAsync(()=>{
        let test = false;
        console.log("Creating Promise");
        Promise.resolve().then(()=>{
            console.log("Promise then() first evaluated success");
            
            return Promise.resolve();
        }).then(()=>{
            console.log("Promise then() second evaluated success");
            test = true;
        })

        flushMicrotasks();
        console.log("running log assertion");

        expect(test).toBeTruthy();
        
    }));

    it("Asynchronous test example with plain promise",fakeAsync(()=>{
        let counter = 0;
        Promise.resolve()
            .then(()=>{
                counter += 10;

                setTimeout(() => {
                    counter+= 1;
                }, 1000);
        })

        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(11);
        
    }));

    it("Asynchronous test example with Observable",fakeAsync(()=>{
        let test = false;
        console.log("Creating Observable");
        // const test$ = of(test);
        const test$ = of(test).pipe(delay(1000)); 
        test$.subscribe(()=>{
            test =true;
        });
        tick(1000)
        console.log("running assertion");
        expect(test).toBe(true)
    }));
})