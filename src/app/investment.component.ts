import { Component} from '@angular/core';
import { PersonData } from './app.component';
import {AppComponent} from './AppComponent'
  
@Component({
    selector: 'investment',
    template: `<table class="table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Acount</th>
		</tr>
	</thead>
	<tbody>
			<tr *ngFor="let item of data">
				<td *ngIf="item.type=='investment'">{{item.name["first"]}}</td>
				   <td *ngIf="item.type=='investment'">{{item.amount}}</td>
			</tr>
	</tbody>
</table>`
})
export class Investment { 
	appComp: AppComponent = new AppComponent;
	data: PersonData[] = this.appComp.data;
}