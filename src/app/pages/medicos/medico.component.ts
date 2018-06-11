import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from '../../models/hospital.models';
import { MedicoService, HospitalService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  public hospitales: Hospital[] = [];
  public medico: Medico = new Medico('','','','','');
  public hospital: Hospital = new Hospital('');

  constructor(
    public _medicoService: MedicoService,
    public _hospitalService: HospitalService,
    public router: Router
  ) { }

  ngOnInit() {
    this._hospitalService.cargarHospitales()
    .subscribe(hospitales => this.hospitales = hospitales );
  }

  guardarMedico(f: NgForm){
    if(f.invalid){
      return;
    }
    this._medicoService.guardarMedico(this.medico)
    .subscribe((medico) => {
      this.medico._id = medico._id;
      this.router.navigate(['/medico',medico._id]);
    })
  }

  cambioHospital(id: string){
    console.log(id);
    this._hospitalService.obtenerHospital(id)
    .subscribe((hospital:any) => this.hospital = hospital);
  }

}
