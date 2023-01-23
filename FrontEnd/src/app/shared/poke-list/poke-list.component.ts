import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  
  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
      this.pokeApiService.apiListAllPokemon.subscribe(
        res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
          console.log(this.getAllPokemons);
        }
      );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any)=>{
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  public zero (str: string | number, size:number = 3): string{
    let s = String(str);
    while (s.length < (size || 2)){
      s = "0" + s;
    }
    return s; 
  }

}
