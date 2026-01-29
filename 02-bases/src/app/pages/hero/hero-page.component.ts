import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";



@Component({
  templateUrl: './hero-page.component.html',
  imports:[UpperCasePipe]
})
export class HeroPageComponent {
name = signal('Iron Man');
age = signal(45);


heroDescription = computed(() => {
  const description = ` ${this.name()} - ${this.age()}`;

  return description;
});


capitalizedName = computed (() =>{
  const nameCapitalized = `${this.name().toUpperCase()}`;
  return nameCapitalized;
})

changeHero(){
   this.name.set('SpiderMan');
   this.age.set(22);
}

resetForm(){
    this.name.set('Iron Man');
   this.age.set(45);
}


chageAge(){
  this.age.set(60);
}

}
