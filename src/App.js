import Homes from "./Page/Homes";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";

function App() {
	return (
		<div>
			<Box
				component="nav"
				aria-label="My site"
				sx={{
					position: "fixed",
					zIndex: "5",
					backgroundColor: "#087A73",
					width: "100%",
				}}>
				<List
					role="menubar"
					row
					sx={{
						minWidth: 320,
					}}>
					<ListItem role="none">
						<ListItemButton
							role="menuitem"
							component="a"
							href="/"
							aria-label="Home">
							<Home
								style={{
									color: "#fff",
								}}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem role="none">
						<ListItemButton
							role="none"
							// component="a"
							// href="#horizontal-list"
							style={{
								color: "#fff",
							}}>
							<b>Jhos</b>
						</ListItemButton>
					</ListItem>
					<ListItem role="none">
						<ListItemButton
							role="menuitem"
							component="a"
							href="#horizontal-list">
							<b>Blog</b>
						</ListItemButton>
					</ListItem>
					<ListItem role="none" sx={{ marginInlineStart: "auto" }}>
						<ListItemButton
							role="menuitem"
							component="a"
							href="#horizontal-list"
							aria-label="Profile"
							style={{
								color: "#fff",
								"&:hover": {
									color: "black",
								},
							}}>
							<Person />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
			<Homes />
		</div>
	);
}

export default App;
