var _ = require('underscore');
var Challengerz = require('challengerz-api-js');
var masterSlug = 'randonneurs-portugal';

Challengerz.init(process.env.CHALLENGERZ_KEY, 'development');

var advance = function advance(type, next) {
  return function(result) {
    console.log();
    console.log("-- Create " + type);
    console.log(result);
    next();
  };
};

var baseEvent = {
    eventSourceSlug: masterSlug,
    edition: 2013,
    eventTags: ['RoadBike', 'BRM'],
    visible: true,
    country: 'Portugal',
    price: { value: 10, currency: '€'},
};

Challengerz.queue(function createEventSource(next) {
  Challengerz.createEventSource({
    slug: masterSlug,
    name: 'Randonneurs Portugal',
    website: 'http://www.randonneursportugal.pt/',
    visible: true
  }, advance('EventSource', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "L'Antique 200",
    slug: 'langique-200',
    distance: 200,
    date: new Date(2013, 1, 2, 8),
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Planícies e Montados 300",
    slug: 'planicies-e-montados',
    distance: 300,
    date: new Date(2013, 2, 2, 6),
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Alto Minho",
    slug: 'alto-minho',
    distance: 200,
    date: new Date(2013, 3, 13, 7, 15),
    region: 'Braga',
    city: 'Marinhas',
    loc: [41.559463, -8.781344]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Baixo-Minho e Barroso 300",
    slug: 'baixo-minho-barroso-300',
    distance: 300,
    date: new Date(2013, 3, 4, 5, 30),
    region: 'Vila do Conde',
    city: 'Azurara',
    loc: [41.353103, -8.726973]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Alqueva 400",
    slug: 'alqueva-400',
    distance: 400,
    date: new Date(2013, 4, 25, 0, 0),
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Midnight Ride 200",
    slug: 'midnight-ride-200',
    distance: 200,
    date: new Date(2013, 4, 25, 0, 0),
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Portugal na Vertical 600",
    slug: 'portugal-na-vertical-600',
    distance: 600,
    price: { value: 15, currency: '€'},
    date: new Date(2013, 5, 22, 14, 0),
    website: 'http://www.randonneursportugal.pt/brm/portugal-na-vertical-600/',
    region: 'Porto',
    city: 'Viana do Castelo',
    loc: [41.697526, -8.832373]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Tejo-Sorraia-Tejo 200",
    slug: 'tejo-sorraia-tejo-200',
    distance: 200,
    date: new Date(2013, 9, 18, 8, 0),
    website: 'http://www.randonneursportugal.pt/brm/tejo-sorraia-tejo-200/',
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Portugal Além Tejo 1000",
    slug: 'portugal-alem-tejo-1000',
    distance: 1000,
    edition: 2014,
    date: new Date(2014, 9, 18, 8, 0),
    website: 'http://www.randonneursportugal.pt/brm/portugal-alem-tejo-1000/',
    region: 'Lisboa',
    city: 'Vila Franca de Xira',
    loc: [38.958341, -8.988559]
  }), advance('Event', next));
});

Challengerz.processQueue();
