import { Component, ViewChild, ElementRef } from '@angular/core';;
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  companies: any[];
  reviews: any[];
  stars: number;
  priority: number;
  thoughts: string;
  companyId: string;
  formChanged = false;
  @ViewChild('modalCloseButton', { static: false }) modalCloseButtonRef!: ElementRef;

  constructor(private companiesService: CompaniesService,
    private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.getCompany();
    this.getReview();

    this.reviewsService.getReview().subscribe((response: any) => {
      const reviews: any[] = response;
      this.stars = response.amount;
      this.thoughts = response.thoughts;
      this.companyId = response.companyId;
    });
  }

  createReview(): void {
    const review = {
      id: this.generateGuid(),
      stars: this.stars,
      thoughts: this.thoughts,
      companyId: this.companyId,
    };

    this.reviewsService.createReview(review).subscribe(
      (response: any) => {
        this.reset();
        this.modalCloseButtonRef.nativeElement.click();
      },
      (error: any) => {
        console.error('Error creating salary:', error);
      }
    );
  }

  getReview(): void {
    this.reviewsService.getReview().subscribe(
      (response: any) => {
        this.reviews = response;
      },
      (error: any) => {
        console.error('Error retrieving salary:', error);
      }
    );
  }

  getCompany(): void {
    this.companiesService.getCompany().subscribe(
      (response: any) => {
        this.companies = response;
      },
      (error: any) => {
        console.error('Error retrieving salary:', error);
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

  reset() {
    this.stars = null;
    this.thoughts = null;
    this.companyId = null;
  }

  detectFormChanges() {
    this.formChanged = true;
  }
}
