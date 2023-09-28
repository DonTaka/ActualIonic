import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  listar() {
    this.api.listarPost().subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
  agregar() {
    var post = {
      "id": 3,
      "titulo": "Post UE5",
      "autor": "John Carmack"
    }
    this.api.agregarPost(post).subscribe((success) => {
      console.log(success)
    }, (error) => {
      console.log(error)
    })
  }
  buscar() {
    this.api.buscarPost(50).subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

  eliminar() {
    this.api.eliminar(1).subscribe((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

  modificar() {
    var post = {
      "id": 2,
      "titulo": "Post Angular",
      "Autor": "Choro moya"
    }
    this.api.updatePost(post.id, post).subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
}
