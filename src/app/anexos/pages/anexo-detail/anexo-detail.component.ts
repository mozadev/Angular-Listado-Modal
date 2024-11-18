import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnexosService } from '../../services/anexos.service';
import { AnexoDetail } from '../../interfaces/anexoDetail.interface';

interface AnexoDetailData{
  duration_hrs: string;
  records: AnexoDetail[]; 
}

@Component({
  selector: 'app-anexo-detail',
  templateUrl: './anexo-detail.component.html',
  styleUrls: ['./anexo-detail.component.css']
})

export class AnexoDetailComponent implements  OnInit{
  
  constructor(
    public dialogRef: MatDialogRef<AnexoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnexoDetailData
  ){}
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeDialog():void {
    this.dialogRef.close()
  }
}
