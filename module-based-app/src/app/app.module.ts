import { NgModule } from '@angular/core';
import { AppComponent } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { Form } from './form/form';
import { Table } from './table/table';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
    declarations: [AppComponent, Header, Form, Table, Dashboard],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}