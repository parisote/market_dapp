import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NewCategoryEvent as NewCategory,
  NewPersonEvent as NewPerson,
  NewPlaceEvent as NewPlace,
  NewRentEvent as NewRent,
  OwnershipTransferred
} from "../generated/ReservApp/ReservApp"
import { NewPlaceEvent, NewRentEvent, NewPersonEvent, NewCategoryEvent } from '../generated/schema'
 
export function handleNewCategoryEvent(event: NewCategory): void {
  let newCategory = NewCategoryEvent.load(getIdFromEvents(event.params.index)+"0x8AaDe4bDd3aFF826C68fe5624E9bE84E5841BdbE");

  if(!newCategory){
    newCategory = new NewCategoryEvent(getIdFromEvents(event.params.index)+"0x8AaDe4bDd3aFF826C68fe5624E9bE84E5841BdbE");
  }

  newCategory.index = event.params.index;
  newCategory.name = event.params.name;
  newCategory.description = event.params.description;
  newCategory.image = event.params.image;
  newCategory.save();
}

export function handleNewPersonEvent(event: NewPerson): void {
  let newPerson = NewPersonEvent.load(event.params.direction.toHexString());

  if(!newPerson){
    newPerson = new NewPersonEvent(event.params.direction.toHexString());
  }

  newPerson.direction = event.params.direction;
  newPerson.last_name= event.params.last_name;
  newPerson.first_name = event.params.first_name;
  newPerson.email = event.params.email;
  newPerson.save();
}

export function handleNewPlaceEvent(event: NewPlace): void {
  let newPlace = NewPlaceEvent.load(getIdFromEvents(event.params.id)+"0x8AaDe4bDd3aFF826C68fe5624E9bE84E5841BdbE");

  if(!newPlace){
    newPlace = new NewPlaceEvent(getIdFromEvents(event.params.id)+"0x8AaDe4bDd3aFF826C68fe5624E9bE84E5841BdbE");
  }

  newPlace.index = event.params.index;
  newPlace.size = event.params.size;
  newPlace.price = event.params.price;
  newPlace.title = event.params.title;
  newPlace.category = event.params.category;
  newPlace.description = event.params.description;
  newPlace.image = event.params.image;
  newPlace.save();
}

export function handleNewRentEvent(event: NewRent): void {
  let newRent = NewRentEvent.load(getIdFromEvents(event.params.index)+event.params.user.toHexString());

  if(!newRent){
    newRent = new NewRentEvent(getIdFromEvents(event.params.index)+event.params.user.toHexString());
  }

  newRent.index = event.params.index;
  newRent.user = event.params.user;
  newRent.category = event.params.category;
  newRent.name = event.params.name;
  newRent.description = event.params.description;
  newRent.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

function getIdFromEvents(idEvent: BigInt): string {
  return idEvent.toHexString();
}
