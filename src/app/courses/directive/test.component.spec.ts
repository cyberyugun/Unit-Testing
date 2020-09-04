import { HighlightDirective } from "./highligh.directive";
import { TestComponent } from "./test.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe(('Test component'),()=>{
    let fixture: ComponentFixture<TestComponent>;
    let des: DebugElement[];
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
          declarations: [ HighlightDirective, TestComponent ]
        })
        .createComponent(TestComponent);
        fixture.detectChanges();
        des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
      });

      it('should have three highlighted elements', () => {
        expect(des.length).toBe(3);
      });
})