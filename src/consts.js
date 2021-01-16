import Tom from './assets/tom.mp3';
import Kick from './assets/kick.mp3';
import Snare from './assets/snare.mp3';
import Cymbal from './assets/cymbal.mp3';
import ClosedHiHat from './assets/closed_hi_hat.mp3';
import OpenHiHat from './assets/open_hi_hat.mp3';
import Hood from './assets/hood.mp3';
import GunFiring from './assets/gun_firing.mp3';
import GunLoading from './assets/gun_loading.mp3';

export const keybindMap = {
  q: {
    id: 'Tom',
    audio: Tom
  },
  w: {
    id: 'Kick',
    audio: Kick
  },
  e: {
    id: 'Snare',
    audio: Snare
  },
  a: {
    id: 'Cymbal',
    audio: Cymbal
  },
  s: {
    id: 'Closed_hi-hat',
    audio: ClosedHiHat
  },
  d: {
    id: 'Open_hi-hat',
    audio: OpenHiHat
  },
  z: {
    id: 'Hood',
    audio: Hood
  },
  x: {
    id: 'Gun_loading',
    audio: GunLoading
  },
  c: {
    id: 'Gun_firing',
    audio: GunFiring
  }
};
