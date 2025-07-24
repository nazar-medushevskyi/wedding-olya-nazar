import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../assets/helpers/calculateTimeLeft";
import { CircleTimer } from "./circleTimer/CircleTimer";
import { WeddingCeremonia } from "./weddingCeremonia";
import { WeddingPhotoContainer } from "./weddingPhotoContainer";

export const WeddingMainContent = () => {
	const targetDate = new Date("2025-08-16T15:00:00+03:00").getTime();

	const [timeLeft, setTimeLeft] = useState(() =>
		calculateTimeLeft(targetDate)
	);

	useEffect(() => {
		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft(targetDate);
			setTimeLeft(newTimeLeft);

			if (
				newTimeLeft.days === "00" &&
				newTimeLeft.hours === "00" &&
				newTimeLeft.minutes === "00" &&
				newTimeLeft.seconds === "00"
			) {
				clearInterval(timer);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div>
			<div className="flex flex-col items-center mb-16">
				<h1 className="wedding-maint-title text-color-light mb-8">
					You are invited!
				</h1>
				<p className="text-center sub-title-content text-color-light">
					Ми будемо раді якщо ви станете частиною цього особливого для
					нас моменту. Ми майже на місці!
				</p>
			</div>

			<div className="countdown flex gap-6 mb-12 justify-center">
				<CircleTimer value={timeLeft.days} label="Днів" />
				<CircleTimer value={timeLeft.hours} label="Годин" />
				<CircleTimer value={timeLeft.minutes} label="Хвилин" />
				<CircleTimer value={timeLeft.seconds} label="Секунд" />
			</div>
			<WeddingCeremonia />
			<WeddingPhotoContainer />
		</div>
	);
};
