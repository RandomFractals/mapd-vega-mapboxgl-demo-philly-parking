# Demo from FOSS4G NA 2018: Philly Parking Violations

A barebones example of using the Vega spec for [OmniSci backend rendering](https://www.omnisci.com/platform/render/) with MapBoxGL.JS. Parking violations data obtained from [Open Data Philly](https://www.opendataphilly.org/dataset/parking-violations).

Note: You need a Mapbox API key in order to use this repo (set the value [here](https://github.com/RandomFractals/mapd-vega-mapboxgl-demo-philly-parking/blob/master/src/common/config.js)), as well as OmniSci Enterprise Edition for its backend rendering capabilities.

![](src/images/mapd-custom-animated.gif)

## Install

```
npm install
```

Or

```
yarn install
```

## Develop

Update mapbox and mapd settings in [src/config.js](https://github.com/RandomFractals/mapd-vega-mapboxgl-demo-philly-parking/blob/master/src/common/config.js)

Start [webpack-dev-server](https://github.com/webpack/webpack-dev-server):

```
npm start
```

Or run it with [http-server](https://github.com/indexzero/http-server):

```
http-server ./dist
```

Open your browser to `http://localhost:8080` to view this map demo app.

## Deploy

_...to do..._

## Contributors
Chris Henrick ([@clhenrick](http://github.com/clhenrick))
Taras Novak ([@RandomFractals](http://github.com/RandomFractals))