import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfSrc= "./assets/pdfFiles/fireball_531dx_manual.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
