import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl
  constructor(private auth:AuthService, 
    private route:Router,
    @Inject(TOASTR_TOKEN)  private toastr:Toastr ){
      
  }
  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z.*]')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z.*]')])
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
    
  }
  saveProfile(formVal){
    this.auth.updateCurrentUser(formVal.firstName,formVal.lastName);
    this.toastr.success('Profile saved');
    // this.route.navigate(['events'])
  }
  cancel(){
    this.route.navigate(['events'])
  }
  validateFirstName(){
    return this.firstName.invalid && this.firstName.touched
  }
  validateLastName(){
    return this.lastName.invalid && this.lastName.touched
  }
}
