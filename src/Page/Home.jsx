import React from "react";
import { fromLonLat } from "ol/proj";
import { boundingExtent, getCenter } from "ol/extent";

import { RMap, ROSM, RControl, RLayerTile } from "rlayers";

//13.324815, 90.742127
//-17.872055, 148.917954
// const extent = boundingExtent([
// 	fromLonLat([90.742, -17.872]),
// 	fromLonLat([148.917, -17.872]),
// ]);

// const center = getCenter(centerlonglat);
const centerlonglat = fromLonLat([118.621, -0.291]);

export default function Home() {
	const mapRef = React.useRef();
	return (
		<RMap
			className="map_container"
			initial={{ center: centerlonglat, zoom: 5 }}
			ref={mapRef}
			// extent={boundingExtent([fromLonLat(getCenter(centerlonglat))])}
			// extent={extent}
		>
			<ROSM />
			<RControl.RLayers>
				<RLayerTile
					properties={{ label: "Google Satelit" }}
					// url="https://api.mapbox.com/styles/v1/ngrhadi/cl4cdliet001a15t986ydv00u.html?title=copy&access_token=pk.eyJ1IjoibmdyaGFkaSIsImEiOiJja3h6eDc1YjU1ZXNiMnh1YmE5aWR2ZnA4In0.YGdQQHLZofRS7Qi-TDTjeQ&zoomwheel=true&fresh=true#12.13/2.48991/102.89855"
					// url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" // esri street
					url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
				/>
				<RLayerTile
					properties={{ label: "Esri Street" }}
					// url="https://api.mapbox.com/styles/v1/ngrhadi/cl4cdliet001a15t986ydv00u.html?title=copy&access_token=pk.eyJ1IjoibmdyaGFkaSIsImEiOiJja3h6eDc1YjU1ZXNiMnh1YmE5aWR2ZnA4In0.YGdQQHLZofRS7Qi-TDTjeQ&zoomwheel=true&fresh=true#12.13/2.48991/102.89855"
					url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
				/>
				<ROSM properties={{ label: "OSM Standar" }} />
			</RControl.RLayers>
		</RMap>
	);
}
