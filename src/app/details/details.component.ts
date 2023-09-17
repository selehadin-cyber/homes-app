import { Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)

  housingService: HousingService = inject(HousingService)
  housingLocation: HousingLocation | undefined
  applyForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email:  new FormControl("", Validators.email)
  })
  constructor(private firestore: AngularFirestore) {
    const housingLocationId = Number(this.route.snapshot.params["id"])
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation
    }) 
  }

  submitApplication() {
    // Create a reference to the "forms" collection in Firestore
    const formsCollection = this.firestore.collection<any>('forms');

    // Prepare the data to be submitted to Firestore
    const formData = {
      firstName: this.applyForm.value.firstName ?? '',
      lastName: this.applyForm.value.lastName ?? '',
      email: this.applyForm.value.email ?? '',
    };

    // Add the data to the "forms" collection
    formsCollection.add(formData)
      .then(() => {
        // Data has been successfully added to Firestore
        // You can add any further logic here if needed
        console.log('Application submitted successfully');
      })
      .catch((error) => {
        // Handle errors if data submission fails
        console.error('Error submitting application:', error);
      });

  }
}
