import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientModel } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit {
  Client: ClientModel[] = [];
  subscriptions: Subscription;

  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.subscriptions = this.clientService.getClient().subscribe((client) => {
      this.Client = client;
    });
  }

  removeClient(_id: string) {
    this.subscriptions = this.clientService
      .deleteClient(_id)
      .subscribe((client) => {
        this.getClient();
      });
  }

  updateClient(clientId: string) {
    this.router.navigateByUrl(`client/update/${clientId}`);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
