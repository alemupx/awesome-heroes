import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  id;

  modelita: String[];



  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.modelita = this.guchigangPapa(
      this.guchigangJr(this.id)
    )

  }

  guchigangJr(id: String) {
    let guchigangBaby = id.split('/')
    return guchigangBaby;
  }

  guchigangPapa(array: String[]) {
    return array
  }

}
