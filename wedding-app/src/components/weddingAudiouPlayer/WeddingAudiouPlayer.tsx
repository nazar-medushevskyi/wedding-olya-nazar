import song from "../../assets/song/song.mp3";

export function WeddingAudiouPlayer() {
	return (
		<>
			<div className="flex flex-col justify-center items-center text-center my-12 wedding-maint-title text-color-light">
				Wedding Day
			</div>
			<div className="flex items-center justify-center mb-6">
				<audio src={song} controls />
			</div>
		</>
	);
}
