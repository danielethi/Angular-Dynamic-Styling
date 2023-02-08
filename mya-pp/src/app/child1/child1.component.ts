import { Component } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  titleColor=''
  notes: Notes[] = [
    {
      title: 'Note 1',
      content:
        'Loreelit. Nostrum ab facere earum nam accusantium, hic aliquam ex nisi placeat! Exercitationem tempore dolore, provident fugiat sapiente ',
      color: 'blue'

    },
    {
      title: 'Note 2',
      content:
        'lorem loremLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab facere earum nam facilis optio a itaque, accusantium, hic aliquam ex nisi placeat! Exercitationem tempore dolore, provident loremlorem lorem ',
      color: 'red'

    },
    {
      title: 'Note 3',
      content:
        'lorem loremLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab facere earum nam facilis optio a itaque, accusantium, hic aliquam ex nisi placeat! Exercitationem tempore dolore, provident loremlorem lorem ',
      color: 'black'

    },
    {
      title: 'Note 3',
      content:
        'ContentLorem ipsum dolor sit adipisicing elit. Nostrum ab facere earum nam facilis optio a itaque, accusantium, hic aliquam ex nisi placeat! Exercitationem tempore dolore, provident fugiat sapiente of note 3',
      color: 'green'

    },
  ];

  color:string = 'red';


  selectedColor = '';
  contentStyle = {};

  changeColor(color: string) {
    this.selectedColor = color;
    this.contentStyle={
    'box-shadow': `0 0 10px ${color}`
    }
  }
}
