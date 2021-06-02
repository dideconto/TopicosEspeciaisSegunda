import { CicloService } from './../../../services/ciclo.service';
import { Ciclo } from "./../../../models/Ciclo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  ciclo: Ciclo = new Ciclo(); 

  constructor(private service: CicloService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    this.service.cadastrar(this.ciclo).subscribe((ciclo) => {
      console.log(ciclo)      
    });
  }
}
