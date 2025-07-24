import { Box } from "@mui/material";
import Photos from "../../../assets/images/png/free-icon-photo-camera-7565050.png";
import { Button } from "@mui/material";

export const WeddingPhotoContainer = () => {
	return (
		<>
			<Box
				className="mt-12 mb-8 w-full m-auto text-white"
				sx={{
					backgroundColor: "#8d9685",
					height: "400px",
				}}>
				<Box
					className="mx-auto flex pt-8 justify-center"
					sx={{ maxWidth: "320px" }}>
					<div className="flex flex-col items-center">
						<img
							src={Photos}
							alt="Rings"
							className="w-18 h-18 transition-transform duration-500 hover:rotate-24"
						/>
						<h1 className="mt-8 wedding-maint-title">Photos</h1>
						<p className="text-center pb-8">
							Долучайтесь до чату для спілкування та обміну
							фотографіями
						</p>

						<Button
							variant="outlined"
							sx={{ color: "white", borderColor: "white" }}
							onClick={() =>
								window.open(
									"https://t.me/+eDWkzyVBXgthYmRi",
									"_blank"
								)
							}>
							Тиць
						</Button>
					</div>
				</Box>
			</Box>
		</>
	);
};
