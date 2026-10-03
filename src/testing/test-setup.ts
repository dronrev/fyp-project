import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';

// Shared TestBed configuration for the generated component and service specs.
// HTTP calls are captured by the testing backend, so no spec reaches the PHP API.
export const TEST_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  IonicModule.forRoot(),
  NgxPaginationModule
];

export const TEST_PROVIDERS = [
  provideHttpClient(),
  provideHttpClientTesting(),
  provideRouter([])
];

// Child components are not declared in the isolated specs.
export const TEST_SCHEMAS = [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA];
