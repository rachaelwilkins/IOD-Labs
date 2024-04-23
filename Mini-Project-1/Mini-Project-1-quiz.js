fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

class Cat {
  constructor(name, child_friendly, dog_friendly, indoor, energy_level, vocalisation, affection_level, grooming) {
    this.name = name;
    this.child_friendly = child_friendly;
    this.dog_friendly = dog_friendly;
    this.indoor = indoor;
    this.energy_level = energy_level;
    this.vocalisation = vocalisation;
    this.affection_level = affection_level;
    this.agrooming = grooming;
    }
  }

  