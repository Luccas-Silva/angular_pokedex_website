import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent  implements OnInit {
  
  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
      this.pokeApiService.apiListAllPokemon.subscribe(
        res => {
          this.getAllPokemons = res.results;
          console.log(this.getAllPokemons);
        }
      );
  }

  public zero (str: string | number, size:number = 3): string{
    let s = String(str);
    while (s.length < (size || 2)){
      s = "0" + s;
    }
    return s; 
  }

}
