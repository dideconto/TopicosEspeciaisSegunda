import { CicloService } from "./../../../services/ciclo.service";
import { Ciclo } from "../../../models/Ciclo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  ciclos: Ciclo[] = [];

  constructor(private service: CicloService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((ciclos) => {
      this.ciclos = ciclos;
    });
  }
}
