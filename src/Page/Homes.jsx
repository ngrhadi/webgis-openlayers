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
import Courosel from "./Courosel";

//-6.918500507980662, 108.40128879706633
export default function Homes() {
	const [centerlonglat, setCenterLongLat] = React.useState(fromLonLat([108.4, -6.918]));
	const mapRef = React.useRef();
	const layerRef = React.useRef();

	const [cardPoint, setCardPoint] = React.useState(false);

	const showCard = () => {
		setCardPoint(true);
	};

	console.log(dataPoint, "data")

	return (
		<>
			<RMap
				className="map_container"
				initial={{ center: centerlonglat, zoom: 8, zoomControl: false }}
				ref={mapRef}
				maxZoom={8}
				minZoom={2}>
				<RControl.RLayers>
					<RLayerTile
						properties={{ label: "Carto Dark" }}
						url="http://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
					// url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
					/>
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

				<RLayerVector
					properties={{ label: "PIM2" }}
					zIndex={5}
					url="/file/pim.geojson"
					ref={layerRef}
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
								}
								onClick={(e) => {
									e.stopPropagation();
									let newCenter = e.map.getView().getCenter();
									setCenterLongLat(fromLonLat(newCenter))
								}}></RFeature>
						);
					})}
				</RLayerVector>
			</RMap>
			<Courosel />
		</>
	);
}
