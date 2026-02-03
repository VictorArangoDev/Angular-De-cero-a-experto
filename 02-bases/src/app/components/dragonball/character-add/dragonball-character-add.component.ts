import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {


  name = signal('');
  power = signal(0);

  newcharacter = output<Character>();


addCharacter() {
  if(!this.name() || !this.power() || this.power() <= 0){
    return;
  }

  const newCharacter: Character = {
    id:Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power()
  }

  // this.characters.update((list) => [...list, newCharacter]);
  this.newcharacter.emit(newCharacter);
  this.resetFields();
}


resetFields(){
  this.name.set('');
  this.power.set(0)
}



}
