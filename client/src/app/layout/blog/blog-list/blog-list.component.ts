import { Component, OnInit, Output } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public articles: Article[] = [
    { id: 1, title: 'First Article', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non metus enim. Sed ac metus vel quam malesuada fermentum vitae eget magna. Phasellus mattis fermentum massa. Sed malesuada enim ultricies bibendum venenatis. Vestibulum at nisl eget quam laoreet feugiat. Ut magna est, ultricies in ipsum sed, aliquet tincidunt ex. Vestibulum sit amet nibh felis.', author: 'Anonymous', imageUrl: 'https://images.unsplash.com/photo-1459245330819-1b6d75fbaa35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
    { id: 2, title: 'Second Article', content: 'Vestibulum blandit augue ut justo vestibulum, vitae sodales velit dictum. Phasellus sagittis nec purus et feugiat. Aenean interdum dolor magna, in suscipit nisl malesuada vel. In tempus pretium tellus, et volutpat diam luctus sit amet. Nullam fringilla varius dui, quis interdum libero hendrerit vel. Proin malesuada ac nibh eu pharetra. Integer lacinia, eros et pharetra viverra, massa lorem tincidunt massa, in tincidunt dui turpis tempor sem. Phasellus fringilla nisl arcu, in pretium urna ultrices consequat. Nullam rhoncus ut lacus non faucibus. Nam at sapien iaculis, bibendum arcu eget, congue massa. Aliquam dapibus odio arcu, sed dapibus dolor elementum ut. Vestibulum tincidunt metus fringilla sem gravida mollis. Vivamus lacinia metus non sapien fringilla porttitor. Aenean imperdiet, lorem ac egestas bibendum, risus nisl sollicitudin ex, molestie maximus est nisi et mi. In vel libero id eros dictum tincidunt.', imageUrl: 'https://images.unsplash.com/photo-1547380109-a2fffd5b9036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1524&q=80' },
    { id: 3, title: 'Third Article', content: 'Vestibulum quis placerat purus. Sed congue bibendum mattis. Proin sit amet nisi placerat, rutrum nisl pharetra, consectetur mi. Maecenas vel est magna. Vivamus eu efficitur justo, non vulputate dolor. Aenean vel condimentum urna. Fusce quis lectus ac lectus congue volutpat. Fusce molestie, mauris ac luctus eleifend, nulla odio sagittis ex, sit amet interdum quam augue a elit. In mattis, lacus placerat euismod gravida, nisi lectus volutpat risus, a malesuada mauris purus non lacus. Morbi dapibus blandit ante, id rhoncus lacus pulvinar sed. Cras eu libero sodales, sollicitudin diam id, semper ligula.', imageUrl: 'https://images.unsplash.com/photo-1476297950673-832dde4dce7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
