<template>
    <div class="dataCenter">
        this is data center
        <div id="mapDiv"></div>
    </div>
</template>

<script>
    import 'ol/ol.css';
    import {Map, View} from 'ol';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';

    export default {
        name: "dataCenter",
        mounted: function () {
            console.log('dataCenter is mounted')
            console.log(document.getElementById('mapDiv'));
            new Map({
                target: 'mapDiv',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 0
                })
            });
        }
    }
</script>

<style scoped>

</style>