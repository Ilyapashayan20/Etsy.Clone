import { Component } from '@angular/core';
import api from 'src/app/axios.config';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  errMessage:string = ''
  loading:boolean = false

  constructor(private fb: FormBuilder, private router:Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
    })
  }

  submitLoginForm(){
    this.loading = true
    api.post('/login',this.loginForm.value)
    .then(res=>{
      const token = res.data.token
      const resData = res.data
      const user: Object = {
        role: resData.role,
        name: resData.name,
        email: resData.email
      }
      localStorage.setItem('user', JSON.stringify(user) )
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
