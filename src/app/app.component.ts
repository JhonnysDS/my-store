import { Component } from '@angular/core';
import { product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jhonnys';
  age = 50;
  img= 'https://images.unsplash.com/photo-1662733625046-ac900bb77091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDY0NDczMw&ixlib=rb-1.2.1&q=80&w=1080';
  btnDisabled= true;

  products: product[]= [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: '/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: '/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '/assets/images/glases.jpg'
    }
  ]

  
  person ={
    name: 'Jhonnys',
    age: 50,
    img: 'https://images.unsplash.com/photo-1662733625046-ac900bb77091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDY0NDczMw&ixlib=rb-1.2.1&q=80&w=1080',
    
  }

  names: string[]=  ['nico', 'julio', 'karol']
  newName = '';
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age +=1;
  }

  addNames(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
