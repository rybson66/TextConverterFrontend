import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConverterService } from '../../services/converter.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-converter-main',
  templateUrl: './converter-main.component.html',
  styleUrls: ['./converter-main.component.scss']
})
export class ConverterMainComponent implements OnInit, OnDestroy {

  form: FormGroup;

  csvDownloadSubscription: Subscription = new Subscription();
  xmlDownloadSusbscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private converterService: ConverterService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      text: ['Mary had a little lamb. Peter called for the wolf, and Aesop came. Cinderella likes shoes.']
    });
  }

  ngOnDestroy() {
    this.csvDownloadSubscription.unsubscribe();
    this.xmlDownloadSusbscription.unsubscribe();
  }

  toCSV() {
    this.converterService.downloadCSV(this.form.value.text);
  }

  toXML() {
    this.converterService.downloadXML(this.form.value.text);
  }
}
