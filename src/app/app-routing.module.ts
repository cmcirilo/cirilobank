import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewTransferComponent } from './new-tranfer/new-transfer.component';
import { StatementComponent } from './statement/statement.component';


export const routes: Routes = [
    { path: '', redirectTo: 'statement', pathMatch: 'full' },
    { path: 'statement', component: StatementComponent },
    { path: 'new-transfer', component: NewTransferComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }