import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {


  name = signal('');
  power = signal(0);




addCharacter() {
  if(!this.name() || !this.power() || this.power() <= 0){
    return;
  }

  const newCharacter: Character = {
    id: 1000,
    name: this.name(),
    power: this.power()
  }

  console.log(newCharacter);
  // this.characters.update((list) => [...list, newCharacter]);
  this.resetFields();
}


resetFields(){
  this.name.set('');
  this.power.set(0)
}



}
