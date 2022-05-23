import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css']
})
export class MuseumCreateComponent implements OnInit {

  museumForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService,
    private router: Router
  ) { }

  createMuseum(museum: Museum){
    this.museumService.createMuseum(museum).subscribe(museum=>{
      console.info("The museum was created: ", museum)
      this.toastr.success("Confirmation", "Museum created")
      this.museumForm.reset();
      this.router.navigate(['/museums/list']);    })
  }

  cancelCreation(){
    this.museumForm.reset();
    this.router.navigate(['/museums/list']);
  }

  ngOnInit() {
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      image: ["", Validators.required],
      address: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      })
  }

}
