import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAddComponent } from "../../components/dragonball/character-add/dragonball-character-add.component";


@Component({
  selector:'dragonball-super',
  templateUrl: './drangoball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DrangoballSuperPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);



}
