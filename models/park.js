const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1)
}

Park.prototype.findMostVisitors = function () {
    let mostVisitors =0;
    let topDino;
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostVisitors) {
            mostVisitors = dinosaur.guestsAttractedPerDay;
            topDino = dinosaur;
        }
    }
    return topDino;
}

module.exports = Park;