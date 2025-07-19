import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-income',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './income.html',
  styleUrl: './income.css'
})
export class Income {

  incomeForm: any
  selectedMonth: any;

  januryIncome: any[]=[
    { source: 'Salary', amount: 5000, investment: '400k' },
    { source: 'Freelance', amount: 2000, investment: 'Stock' }
  ]

  februaryIncome: any[]=[
    { source: 'Salary', amount: 5500, investment: '450k' },
    { source: 'Freelance', amount: 2500, investment: 'Real Estate' }
  ]
  marchIncome: any[]=[
    { source: 'Rental Income', amount: 6000, investment: '500k' },
    { source: 'Freelance', amount: 3000, investment: 'Crypto' }
  ]

  constructor(public fb:FormBuilder, public router: Router){
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }

  ngOnInit():void{
    this.incomeForm =this.fb.group({
     month: ['',Validators.required],
     source: ['', Validators.required],
      amount: ['',Validators.required],
      investment: ['',Validators.required]
    });
  }
   
  OnSubmit() {
   if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch(this.selectedMonth) {
        case 'January':
          this.januryIncome.push(newIncome);
          break;
        case 'February':
          this.februaryIncome.push(newIncome);
          break;
        case 'March':
          this.marchIncome.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({month:'', source: '', amount: '', investment: ''});
    }

  }
  onChange(event:any){
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncome();
  }
  calculateTotalIncome(month:string):any {
    let totalincome=0;
    for(let income of this.getIncomeByMonth(month)) {
      totalincome += income.amount;
    } 
    return totalincome;
  }

  monthSelected:boolean = false;
  
  getIncomeByMonth(month: string): any[] {
    switch(month) {
      case 'January':
        return this.januryIncome;
      case 'February':
        return this.februaryIncome;
      case 'March':
        return this.marchIncome;
      default:
        return [];
    }
  }

  getFilteredIncome() {
    let FilteredIncome: any[] = [];
    switch(this.selectedMonth) {
      case 'January': 
        FilteredIncome = [...this.januryIncome];
        break;  
      case 'February':
        FilteredIncome = [...this.februaryIncome];
        break;
      case 'March':
        FilteredIncome = [...this.marchIncome]; 
        break;
      default:
        break;

  }
  return FilteredIncome;
}
onBack() {
  this.router.navigate(['/budgetplanner/dashboard']);
}

saveForm(){
  console.log("Form Saved!!");
}

}
