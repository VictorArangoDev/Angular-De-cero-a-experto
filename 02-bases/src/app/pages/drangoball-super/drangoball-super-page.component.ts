import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/character-add/dragonball-character-add.component";
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  selector:'dragonball-super',
  templateUrl: './drangoball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DrangoballSuperPageComponent {

  public dragonballService = inject(DragonBallService);

}
