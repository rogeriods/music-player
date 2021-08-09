import { v4 as uuidv4 } from 'uuid';
import cover from './assets/covers/planet_zoom.jpg';

function planetZoom() {
  return [
    {
      name: 'Playing With Colors and Sounds',
      cover: cover,
      artist: 'Serginho Carvalho, Paul Mounsay, Amanda Acosta, Sérgio Buss',
      audio:
        'https://drive.google.com/file/d/0Bxhxd9ABKikjRC1yRWlJQzhjeU0/view?usp=sharing&resourcekey=0-2NgdjdRLWnEg_8vQ5yokLw',
      color: ['#000', '#000'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'In Silence',
      cover: cover,
      artist: 'Zuzo Moussawer, Joe Moghrabi, Nelson Jr., Melo Jr., Sérgio Buss',
      audio:
        'https://drive.google.com/file/d/0Bxhxd9ABKikjMG5NcndXT0FNMG8/view?usp=sharing&resourcekey=0-s8VQHjdGW3WDFKPMV_xLqw',
      color: ['#000', '#000'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Visiting Your Little World',
      cover: cover,
      artist: 'Serginho Carvalho, Paul Mounsay, Amanda Acosta, Sérgio Buss',
      audio:
        'https://drive.google.com/file/d/0Bxhxd9ABKikjZV80QzFRMVIxa2c/view?usp=sharing&resourcekey=0-y_t9HJsNtVpSyuw8YDb-jQ',
      color: ['#000', '#000'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'A Hidden Spot',
      cover: cover,
      artist:
        'Edu Ardanuy, Kiko Loureiro, Marcio Okayama, Marcos DeRos, Daniela "Piva",  Zuzo Moussawer, Serginho Carvalho, Sérgio Buss',
      audio:
        'https://drive.google.com/file/d/0Bxhxd9ABKikjRVZacEwyRjJPbG8/view?usp=sharing&resourcekey=0-zTlvLu02x-AzAGaG0dqbOg',
      color: ['#000', '#000'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'VisiVisiting Your Little World (Backing Track)',
      cover: cover,
      artist: 'Backing Track',
      audio:
        'https://drive.google.com/file/d/0Bxhxd9ABKikja1hXazQ5d0VrcFU/view?usp=sharing&resourcekey=0-x2Q1GddyZrO-5FvXw2-iUA',
      color: ['#000', '#000'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default planetZoom;
