import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Injectable } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CustomerDetailsComponent implements OnInit {

	obj: AngularFireList<any>;


  constructor(private route: ActivatedRoute, private database: AngularFireDatabase) {
  	
  }

  getCustomers(){
    this.obj = this.database.list("customers");
    return this.obj;
  }

  	this.route.paramMap.subscribe(params => {
      this.obj = this.obj[+params.get('id')];
  		
  	});

}