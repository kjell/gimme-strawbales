var fs = require('fs')
var turf = require('turf')
var bales = JSON.parse(fs.readFileSync('./bales.json', 'utf8'))

var forSale = turf.featurecollection(bales[1][8].pids.map(function(id) {
	var bale = bales[2][id]
	return turf.point([parseFloat(bale.lng), parseFloat(bale.lat)], {
		name: bale.title,
		address: bale.add,
		price: bale.prc,
		url: bale.guid,
	})
}))

var mpls = turf.point([-93.2742, 44.9587])
var balesNearby = turf.within(
	forSale,
	turf.buffer(mpls, 200, 'miles')
)

console.log(JSON.stringify(balesNearby))
