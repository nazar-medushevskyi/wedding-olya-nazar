import { WeddingHeader } from "./components/weddingHeader";
import { WeddingAudiouPlayer } from "./components/weddingAudiouPlayer";
import { WeddingMainContent } from "./components/weddingMainContent";

export function App() {
	return (
		<div className="main flex flex-col">
			<WeddingHeader />
			<WeddingAudiouPlayer />
			<WeddingMainContent />
		</div>
	);
}
