import { Component} from '@angular/core';
import { PersonData } from './app.component';
import {AppComponent} from './AppComponent'
  
@Component({
    selector: 'loan',
    template: `<table class="table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Acount</th>
		</tr>
	</thead>
	<tbody>
			<tr *ngFor="let item of data">
				<td>{{item.name["first"]}}</td>
				<td>{{item.amount}}</td>
			</tr>
	</tbody>
</table>`
})
export class Loan {
	appComp: AppComponent = new AppComponent;
	data: PersonData[] = this.appComp.data.filter(x=>x["type"]=="loan");
 }