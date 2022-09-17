import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import dataPoint from "../file/pim.json";

const data = [
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
];

export default function Courosel() {
	console.log(dataPoint.features.map((item) => item.properties.date));
	return (
		<Box
			sx={{
				position: "absolute",
				bottom: 0,
				display: "flex",
				gap: 1,
				py: 1,
				overflow: "auto",
				width: "100vw",
				scrollSnapType: "x mandatory",
				backgroundColor: "#087A73",
				"& > *": {
					scrollSnapAlign: "center",
				},
				"::-webkit-scrollbar": { display: "none" },
			}}>
			{dataPoint.features.map((item) => (
				<Card
					row
					key={item.blog.title}
					variant="outlined"
					sx={{
						gap: 2,
						"--Card-padding": (theme) => theme.spacing(2),
						backgroundColor: "#A7F7EC",
					}}>
					<AspectRatio
						ratio="1"
						className="img-fluid"
						sx={{ minWidth: 50, borderRadius: "sm", overflow: "auto" }}>
						<img
							src={`${item.blog.src}?h=120&fit=crop&auto=format`}
							srcSet={`${item.blog.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
							alt={item.blog.title}
						/>
					</AspectRatio>
					<Box sx={{ whiteSpace: "nowrap" }}>
						<Typography fontWeight="md">{item.blog.title}</Typography>
						<Typography level="body2">{item.blog.description}</Typography>
					</Box>
				</Card>
			))}
		</Box>
	);
}
