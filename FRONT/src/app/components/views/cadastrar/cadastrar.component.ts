import { CicloService } from './../../../services/ciclo.service';
import { Ciclo } from "./../../../models/Ciclo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  data!: string;

  constructor(private service: CicloService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let data = new Date(this.data);
    data.setHours(data.getHours() + 3);
    let ciclo = new Ciclo();
    ciclo.data = new Date(data);
    this.service.cadastrar(ciclo).subscribe((ciclo) => {
      console.log(ciclo)      
    });
  }
}
