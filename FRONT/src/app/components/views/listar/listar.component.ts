import { Ciclo } from "../../../models/Ciclo";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  
  ciclos: Ciclo[] = [];

  constructor(private http: HttpClient) {
    this.ciclos = [];
    //Observable<Ciclo[]>
    http.get<Ciclo[]>("http://localhost:3000/ciclo/listar").subscribe((lista) => {
      this.ciclos = lista;
      console.log(this.ciclos);
    });
  }

  ngOnInit(): void {
    //Carregar todos os ciclos de pagamento que estão na API
    // console.log("Testando o evento de carregamento do componente!");
  }
}
