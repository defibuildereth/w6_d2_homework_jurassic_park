const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50) 
    dinosaur1 = new Dinosaur('Stegosaurus', 'herbivore', 80)
    park = new Park ('Jurassic Park', 50, [dinosaur])

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    const actual = park.findMostVisitors();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur1)
    const actual = park.findAllOfSpecies('Stegosaurus').length
    assert.strictEqual(actual, 2)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
