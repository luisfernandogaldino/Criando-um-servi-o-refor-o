import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import{OnInit} from '@angular/core';
import { SessaoService } from '../sessao/service/sessao.service';
import { Isessao } from './service/isessao';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent implements OnInit {
 ngOnInit(): void {this.listar()}

 produtos: Isessao[] = [];

 constructor(private service: SessaoService){ }

 listar(){
  this.service.listarAll().subscribe(dados => this.produtos = dados);
 }
     
Comprar(){
    Swal.fire({
      title: "Você deseja comparar esse produto?",
      showDenyButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Comprado com sucesso!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro", "", "error");
      }
    });
  }

}
