import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'A Test Description1',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'A Test Description2',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
