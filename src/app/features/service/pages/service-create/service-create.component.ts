import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceModel } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';

@Component({
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss'],
})
export class ServiceCreateComponent implements OnInit {
  serviceForm!: FormGroup;
  serviceId: string;
  title = 'Adicionar serviço';
  isSubmitted: boolean = false;
  editmode: boolean = false;
  subscriptions: Subscription;

  constructor(
    private serviceServices: ServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initServiceForm();
    this.checkEditMode();
  }

  private initServiceForm() {
    this.serviceForm = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      startHour: ['', Validators.required],
      end: ['', Validators.required],
      endHour: ['', Validators.required],
      services: ['', Validators.required],
      price: ['', Validators.required],
      paid: [false],
      finished: [false],
      t: ['T'],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    const service: ServiceModel = {
      _id: this.serviceId,
      title: this.serviceForm.controls.title.value,
      start:
        this.serviceForm.controls.start.value +
        this.serviceForm.controls.t.value +
        this.serviceForm.controls.startHour.value,
      startHour: this.serviceForm.controls.startHour.value,
      end:
        this.serviceForm.controls.end.value +
        this.serviceForm.controls.t.value +
        this.serviceForm.controls.endHour.value,
      endHour: this.serviceForm.controls.endHour.value,
      services: this.serviceForm.controls.services.value,
      price: this.serviceForm.controls.price.value,
      paid: this.serviceForm.controls.paid.value,
      finished: this.serviceForm.controls.finished.value,
    };

    if (this.editmode) {
      this.updateService(service);
    } else {
      this.createService(service);
    }
  }

  createService(service: ServiceModel) {
    if (this.serviceForm.valid) {
      this.subscriptions = this.serviceServices
        .createService(service)

        .subscribe({
          next: () => {
            this.router.navigateByUrl('services');
          },
          error: (err: any) => {
            console.log(service);
            console.log(err);
          },
        });
    }
  }

  updateService(service: ServiceModel) {
    if (this.serviceForm.valid) {
      this.subscriptions = this.serviceServices
        .updateService(service)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('services');
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    }
  }

  private checkEditMode() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.editmode = true;
        this.serviceId = params.id;
        this.title = 'Editar serviço';
        this.serviceServices.getServiceId(params.id).subscribe((service) => {
          console.log(service.start.split('T', 1));
          this.serviceForm.controls.title.setValue(service.title);
          this.serviceForm.controls.start.setValue(service.start.split('T', 1));
          this.serviceForm.controls.startHour.setValue(service.startHour);
          this.serviceForm.controls.services.setValue(service.services);
          this.serviceForm.controls.end.setValue(service.end.split('T', 1));
          this.serviceForm.controls.endHour.setValue(service.endHour);
          this.serviceForm.controls.price.setValue(service.price);
          this.serviceForm.controls.paid.setValue(service.paid);
          this.serviceForm.controls.finished.setValue(service.finished);
        });
      }
    });
  }

  back() {
    this.router.navigateByUrl('services');
  }
}
