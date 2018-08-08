import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { ElephantMockRepository } from './data/repository/elephant-mock.repository';
import { ElephantEditorComponent } from './presentation/elephant-editor/elephant-editor.component';
import { ElephantCardListComponent } from './presentation/elephant-card-list/elephant-card-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ElephantEditorComponent,
        ElephantCardListComponent
      ],
      providers: [
        {provide: ElephantRepository, useClass: ElephantMockRepository}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
