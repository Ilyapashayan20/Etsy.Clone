import { Component } from '@angular/core';
import api from 'src/app/axios.config';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  errMessage:string = ''
  loading:boolean = false


  constructor(private fb: FormBuilder, private router:Router){}


  ngOnInit(){
    this.registerForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
    })
  }

  submitRegisterForm(){
    this.loading = true;
    console.log(this.registerForm.value)
    api.post('/register',this.registerForm.value)
    .then(res=>{
      const token = res.data.token
      console.log(res)
      localStorage.setItem('token',token)
      this.router.navigate(['/']);
    }).catch(err=>{
      console.log(err)
       this.errMessage = err.response?.data?.message || 'an error occurred'
    }).finally(()=>{
      this.loading = false
    })
  }
}

