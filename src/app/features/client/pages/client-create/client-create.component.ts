import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarModel } from '../../models/car.model';
import { ClientModel } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {
  clientForm!: FormGroup;
  clientId: string;
  arrayCars: CarModel[] = [];
  title = 'Adicionar cliente';
  isSubmitted: boolean = false;
  editmode: boolean = false;
  subscriptions: Subscription;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.checkEditMode();
    this.getCars();
  }

  private initLoginForm() {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      streetnumber: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      car: ['', Validators.required],
      licenseplate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    const client: ClientModel = {
      _id: this.clientId,
      name: this.clientForm.controls.name.value,
      email: this.clientForm.controls.email.value,
      phone: this.clientForm.controls.phone.value,
      street: this.clientForm.controls.street.value,
      streetnumber: this.clientForm.controls.streetnumber.value,
      city: this.clientForm.controls.city.value,
      state: this.clientForm.controls.state.value,
      car: this.clientForm.controls.car.value,
      licenseplate: this.clientForm.controls.licenseplate.value,
    };

    if (this.editmode) {
      this.updateClient(client);
    } else {
      this.createClient(client);
    }
  }

  createClient(client: ClientModel) {
    if (this.clientForm.valid) {
      this.subscriptions = this.clientService.createClient(client).subscribe({
        next: () => {
          this.router.navigateByUrl('client');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }

  updateClient(client: ClientModel) {
    if (this.clientForm.valid) {
      this.subscriptions = this.clientService.updateClient(client).subscribe({
        next: () => {
          this.router.navigateByUrl('client');
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
        this.title = 'Editar cliente';
        this.clientId = params.id;
        this.subscriptions = this.clientService
          .getClientId(params.id)
          .subscribe((client) => {
            this.clientForm.controls.name.setValue(client.name);
            this.clientForm.controls.email.setValue(client.email);
            this.clientForm.controls.phone.setValue(client.phone);
            this.clientForm.controls.street.setValue(client.street);
            this.clientForm.controls.streetnumber.setValue(client.streetnumber);
            this.clientForm.controls.city.setValue(client.city);
            this.clientForm.controls.state.setValue(client.state);
            this.clientForm.controls.car.setValue(client.car);
            this.clientForm.controls.licenseplate.setValue(client.licenseplate);
          });
      }
    });
  }

  getCars() {
    this.subscriptions = this.clientService.getCars().subscribe({
      next: (cars) => {
        this.arrayCars = cars;
        console.log(cars);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  back() {
    this.router.navigateByUrl('client');
  }
}
