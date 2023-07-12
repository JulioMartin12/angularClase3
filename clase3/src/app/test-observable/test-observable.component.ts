import { Component, OnDestroy, OnInit } from '@angular/core';
import {filter, from, map, Subscription, timer}  from 'rxjs'

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
       if(this.subcription)
      this.subcription.unsubscribe();
    }
  
  subcription : Subscription | null = null ;

  ngOnInit(): void {
    from([1,34,2,54,1243]).subscribe((data:number)=>console.log(data))
    
    from([2,3,46,1,99]).subscribe({
  next:(data:number)=>console.log(data),
  error:(err)=> console.warn(err),
 });
 this.subcription = timer(0, 1000).pipe(
  filter((data)=> data %2 === 0),
  map((data)=> data*2),
 ).subscribe({
  next:(data:number)=>console.log(data),
  error:(err)=> console.warn(err),
 });
  }

 
}
