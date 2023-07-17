import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SalariesService } from 'src/app/services/salaries/salaries.service';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent {
  id: string;
  amount: number;
  experience: number;
  createdDate: string;
  locationId: string = '';
  languageId: string = '';
  jobId: string = '';
  salaryForm: FormGroup;
  salaries: any[];
  languages: any[];
  locations: any[];
  jobs: any[];

  constructor(private salariesService: SalariesService,
    private languagesService: LanguagesService,
    private locationsService: LocationsService,
    private jobsService: JobsService) {

    this.salaryForm = new FormGroup({
      createdDate: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getSalary();
    this.getLocation();
    this.getJob();
    this.getLanguage();

    this.salariesService.getSalary().subscribe((response: any) => {
      const salaries: any[] = response;
      this.amount = response.amount;
      this.experience = response.experience;
      this.locationId = response.locationId;
      this.createdDate = response.createdDate;
      this.languageId = response.languageId;
      this.jobId = response.jobId;
    });
  }

  createSalary(): void {
    const salary = {
      id: this.generateGuid(),
      amount: this.amount,
      experience: this.experience,
      createdDate: new Date((new Date().toUTCString())),
      locationId: this.locationId,
      languageId: this.languageId,
      jobId: this.jobId
    };

    this.salariesService.createSalary(salary).subscribe(
      (response: any) => {
        this.amount = null;
        this.experience = null;
        this.locationId = null;
        this.languageId = null;
        this.jobId = null;
      },
      (error: any) => {
        console.error('Error creating salary:', error);
      }
    );
  }

  getSalary(): void {
    this.salariesService.getSalary().subscribe(
      (response: any) => {
        this.salaries = response;
      },
      (error: any) => {
        console.error('Error retrieving salary:', error);
      }
    );
  }

  getLanguage(): void {
    this.languagesService.getLanguage().subscribe(
      (response: any) => {
        this.languages = response;
      },
      (error: any) => {
        console.error('Error retrieving language:', error);
      }
    );
  }

  getLocation(): void {
    this.locationsService.getLocation().subscribe(
      (response: any) => {
        this.locations = response;
      },
      (error: any) => {
        console.error('Error retrieving location:', error);
      }
    );
  }

  getJob(): void {
    this.jobsService.getJob().subscribe(
      (response: any) => {
        this.jobs = response;
      },
      (error: any) => {
        console.error('Error retrieving job:', error);
      }
    );
  }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
