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
    city: 'Vila Franca de Xira',
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Planícies e Montados 300",
    slug: 'planicies-e-montados',
    distance: 300,
    date: new Date(2013, 2, 2, 6),
    city: 'Vila Franca de Xira',
  }), advance('Event', next));
});

Challengerz.queue(function createEvent(next) {
  Challengerz.createEvent(_.extend(baseEvent, {
    name: "Alto Minho",
    slug: 'alto-minho',
    distance: 200,
    date: new Date(2013, 4, 13, 7, 15),
    city: 'Marinhas',
  }), advance('Event', next));
});

Challengerz.processQueue();
