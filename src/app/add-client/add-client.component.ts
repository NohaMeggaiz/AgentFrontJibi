import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentServiceService } from '../service/agent-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: AgentServiceService,private router: Router) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      typecompte: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numTel: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

 

 
  addClient(){
    console.log(this.clientForm.value);
    this.clientService.createClient(this.clientForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/list');
    })
  }
}
