import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class Map {

    static init () {
        const map = new L.Map('my-map').setView([0, 0], 2);
        let token = 'I4dghF3lBbpU1B2DICNfVI6aXEIpvEW56Jxsvuirn8WKKlnJBdafKnLcXQHbSWfC'
        L.tileLayer(
        `https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${token}`, {
            attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
            maxZoom: 15
        }
        ).addTo(map);
        map.addControl(new JawgPlaces.Leaflet({
        searchOnTyping: true,
        L: L,
        }))
    }

}

