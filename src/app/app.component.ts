import { Component, OnInit, ViewChild } from '@angular/core';
import { Language } from './parents/interfaces/language.interface';
import { ParentsService } from './parents/services/parents.service';
import { HomeComponent } from './parents/pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Arbol-Prueba';
  languages: Language[] = [];
  @ViewChild(HomeComponent) language: String = "en_US";

  constructor(private services: ParentsService) { }

  ngOnInit(): void {
    this.services.getLocales()
      .subscribe(languages => this.languages = languages)

    console.log(this.language);
  }

  changeLAnguage(language: Language) {
    this.language = language.locale;
  }


}
