import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent  implements OnInit {
  
  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
      this.pokeApiService.apiListAllPokemon.subscribe(
        res => console.log(res)
      );
  }

}
