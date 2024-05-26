import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'] // Correction ici
})
export class ListClientsComponent implements OnInit, AfterViewInit {
  getPayment(student: any) {
    this.router.navigateByUrl("/payments");
  }

  search(event: Event) {
    let value = (event.target as HTMLInputElement).value; // Correction ici
    this.dataSource.filter = value.trim().toLowerCase();
  }

  public clients: any;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource(); // Initialisation ici
  public displayedColumns: string[] = ['id', 'nom', 'prenom', 'email','numTel', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private myService: AgentServiceService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.myService.getAllClients().subscribe(
      data => {
        this.clients = data;
        this.dataSource.data = this.clients; // Mise à jour des données
        this.dataSource.paginator = this.paginator; // Assurez-vous que paginator et sort sont bien assignés
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  delete(numTel:number){
    this.myService.deleteClient(numTel).subscribe((res)=>{
      console.log(res);
    })
  }
}
