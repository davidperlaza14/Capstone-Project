/**
 * A function that returns an object.
 */

export function Tecnology({ icon, name } = {}) {
  this.icon = icon;
  this.name = name;
}

export function UserTalet({ img, name, description, tecnologies } = {}) {
  this.img = img;
  this.name = name;
  this.description = description;
  this.tecnologies = tecnologies;
}

export function GaleryItemImage({ img, thumbnail } = {}) {
  this.original = img;
  this.thumbnail = thumbnail;
  this.originalHeight = `${window.innerHeight * 0.6}px`;
  this.originalWidth = `${window.innerWidth * 0.6}px`;
}

export function ProfileImage({ profile, name } = {}) {
  this.src = profile;
  this.alt = name;
}
