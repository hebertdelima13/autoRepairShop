import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceModel } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';

@Component({
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.scss'],
})
export class ServiceDashboardComponent implements OnInit {
  services: ServiceModel[] = [];
  subscriptions: Subscription;

  constructor(
    private serviceServices: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.subscriptions = this.serviceServices
      .getService()
      .subscribe((service) => {
        console.log(service);
        this.services = service;
      });
  }

  updateService(serviceId: string) {
    this.router.navigateByUrl(`services/update/${serviceId}`);
  }

  removeService(_id: string) {
    this.subscriptions = this.serviceServices
      .deleteService(_id)
      .subscribe((service) => {
        this.getService();
      });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
