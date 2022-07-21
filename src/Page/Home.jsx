import React from "react";
import { fromLonLat } from "ol/proj";
import { GeoJSON } from "ol/format";
import {
	RMap,
	ROSM,
	RControl,
	RLayerTile,
	RLayerVector,
	RStyle,
	RFeature,
} from "rlayers";
import dataPoint from "../file/pim.json";
import { Feature } from "ol";
import { Point } from "ol/geom";
import CircleStyle from "ol/style/Circle";
import { Fill, Stroke } from "ol/style";
//13.324815, 90.742127
//-17.872055, 148.917954
// const extent = boundingExtent([
// 	fromLonLat([90.742, -17.872]),
// 	fromLonLat([148.917, -17.872]),
// ]);

// const center = getCenter(centerlonglat);
const centerlonglat = fromLonLat([118.621, -0.291]);
const fetchingData = async () => {
	const response = await fetch("/file/pim.json");
	const data = await response.json();
	return data;
};

const pointDataFix = [
	{
		type: "Feature",
		properties: { id: 1, date: "1995-12-11", name_loc: "OE OE OE" },
		bbox: [108.080959, -6.325041, 108.080959, -6.325041],
		geometry: { type: "Point", coordinates: [108.080959, -6.325041] },
	},
	{
		type: "Feature",
		properties: {
			id: 2,
			date: "2010-04-12",
			name_loc: "OE OE OE (2)",
		},
		bbox: [108.480692, -6.747386, 108.480692, -6.747386],
		geometry: { type: "Point", coordinates: [108.480692, -6.747386] },
	},
	{
		type: "Feature",
		properties: { id: 3, date: "2015-09-18", name_loc: "MBC" },
		bbox: [110.465051, -7.776037, 110.465051, -7.776037],
		geometry: { type: "Point", coordinates: [110.465051, -7.776037] },
	},
	{
		type: "Feature",
		properties: { id: 5, date: "2019-02-13", name_loc: "EVOLUTION" },
		bbox: [106.740189, -6.338732, 106.740189, -6.338732],
		geometry: { type: "Point", coordinates: [106.740189, -6.338732] },
	},
	{
		type: "Feature",
		properties: {
			id: 6,
			date: "2019-07-25",
			name_loc: "HISTORY NOT LIE",
		},
		bbox: [97.912004, 2.896805, 97.912004, 2.896805],
		geometry: { type: "Point", coordinates: [97.912004, 2.896805] },
	},
	{
		type: "Feature",
		properties: {
			id: 7,
			date: "2020-07-13",
			name_loc: "COLD PLACE AND MESOZOIC ERA",
		},
		bbox: [120.133011, -1.163162, 120.133011, -1.163162],
		geometry: { type: "Point", coordinates: [120.133011, -1.163162] },
	},
	{
		type: "Feature",
		properties: {
			id: 8,
			date: "2021-07-20",
			name_loc: "CITY OF PANCASILA",
		},
		bbox: [121.656418, -8.839727, 121.656418, -8.839727],
		geometry: { type: "Point", coordinates: [121.656418, -8.839727] },
	},
	{
		type: "Feature",
		properties: {
			id: 9,
			date: "2021-07-22",
			name_loc: "ASTRONOMIA TRADITIONAL",
		},
		bbox: [121.820152, -8.766963, 121.820152, -8.766963],
		geometry: { type: "Point", coordinates: [121.820152, -8.766963] },
	},
	{
		type: "Feature",
		properties: {
			id: 10,
			date: "2021-10-14",
			name_loc: "BARIER NATIONALISM AND DAYAK",
		},
		bbox: [115.696393, 3.906583, 115.696393, 3.906583],
		geometry: { type: "Point", coordinates: [115.696393, 3.906583] },
	},
	{
		type: "Feature",
		properties: {
			id: 11,
			date: "2021-04-13",
			name_loc: "ANGLE PLACE",
		},
		bbox: [103.712712, -1.089762, 103.712712, -1.089762],
		geometry: { type: "Point", coordinates: [103.712712, -1.089762] },
	},
	{
		type: "Feature",
		properties: {
			id: 12,
			date: "2022-05-05",
			name_loc: "ALONE ENGINEER",
		},
		bbox: [101.576007, 3.150958, 101.576007, 3.150958],
		geometry: { type: "Point", coordinates: [101.576007, 3.150958] },
	},
];

export default function Home() {
	const mapRef = React.useRef();
	const layerRef = React.useRef();
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetchingData().then((data) => {
			setData(data);
		});
	}, []);

	return (
		<RMap
			className="map_container"
			initial={{ center: centerlonglat, zoom: 5 }}
			ref={mapRef}>
			<RControl.RLayers>
				<RLayerTile
					properties={{ label: "Esri Street" }}
					url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
				/>
				<RLayerTile
					properties={{ label: "Google Satelit" }}
					url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
				/>
				<ROSM properties={{ label: "OSM Standar" }} />
			</RControl.RLayers>
			<RLayerVector properties={{ label: "PIM" }} zIndex={5} ref={layerRef}>
				<RStyle.RStyle>
					<RStyle.RFill color="red" width={2} />
					<RStyle.RStroke color="black" width={2} />
				</RStyle.RStyle>
				{dataPoint.features.map((feature) => {
					return (
						<RFeature
							key={feature.properties.id}
							feature={
								new Feature({
									geometry: new Point(
										fromLonLat([
											feature.geometry.coordinates[0],
											feature.geometry.coordinates[1],
										]),
									),
								})
							}></RFeature>
					);
				})}
			</RLayerVector>
			<RLayerVector
				properties={{ label: "PIM2" }}
				zIndex={5}
				url="/file/pim.geojson"
				format={
					new GeoJSON({
						dataProjection: "EPSG:4326",
						featureProjection: "EPSG:3857",
					})
				}>
				{dataPoint.features.map((feature) => {
					return (
						<RFeature
							key={feature.properties.id}
							feature={
								new Feature({
									geometry: new Point(
										fromLonLat([
											feature.geometry.coordinates[0],
											feature.geometry.coordinates[1],
										]),
									),
								})
							}></RFeature>
					);
				})}
			</RLayerVector>
		</RMap>
	);
}
