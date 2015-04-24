bales.json:
	@curl --silent http://strawbalemarket.com/ | grep 'gmapdata =' \
		| sed 's/var gmapdata = //; s/;.*$$//' \
		> bales.json
	node nearby.js | jq '.' | tee bales.geojson

.PHONY: bales.json
