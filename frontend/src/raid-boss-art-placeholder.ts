
// import img1 from './assets/CB_Hellborn Brute.gif';
// import img2 from './assets/CB_Hellborn Executioner.gif';
// import img3 from './assets/CB_Hellborn Marauder.gif';
// import img4 from './assets/CB_Hellborn Overlord.gif';
// import img5 from './assets/CB_Hellborn Shaman.gif';
// import img6 from './assets/DragonFlyIdle_512.gif';
import img7 from './assets/CB_Hellborn M13.gif';
import img8 from './assets/CB_Hellborn Ste1n.gif';
import img9 from './assets/CB_Hellborn Moneth.gif';
import img10 from './assets/CB_Hellborn Skulpin.gif';
import img11 from './assets/CB_Hellborn Plitszkin.gif';

const allImages = [
  // img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11];

export function getBossArt(id: number) {
  return allImages[id % allImages.length];
}
