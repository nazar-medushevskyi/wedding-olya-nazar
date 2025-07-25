import { Button } from "@mui/material";
import RingIcon from "../../../assets/images/svg/rings-svgrepo-com.svg";

export const WeddingCeremonia = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<img
					src={RingIcon}
					alt="Rings"
					className="w-18 h-18 transition-transform duration-500 hover:rotate-24"
				/>
				<h1 className="mb-8 wedding-maint-title text-color-light">
					Ceremonia
				</h1>
				<p className="text-center text-color-light sub-title-content">
					Дніпровська Християнська Церква
					<br />
					Чекаємо на вас, любі гості!
				</p>
				<div className="grid grid-cols-3 items-center w-[280px] my-4 text-color-light">
					<div className="text-right wedding-time-title">
						16 Серпня
					</div>
					<div className="flex justify-center">
						<div className="w-[1px] h-18 bg-[#8d9685]" />
					</div>
					<div className="text-left wedding-time-title">
						3:00{" "}
						<span className="wedding-time-title-span">P.M</span>
					</div>
				</div>
				<p className="mb-8 text-color-light">
					проспект Мануйлівський, 1, Дніпро
				</p>
				<Button
					variant="contained"
					sx={{ color: "white", backgroundColor: "#8d9685" }}
					onClick={() =>
						window.open(
							"https://dcchurchua.com/en/home-english/",
							"_blank"
						)
					}>
					Дивитися місце
				</Button>
			</div>

			<div className="flex flex-col mt-12 items-center">
				<h1 className="mb-8 wedding-maint-title text-color-light">
					Banquet
				</h1>
				<p className="text-center text-color-light sub-title-content">
					Дніпровська Християнська Церква
					<br />
					Кафе, 2-й поверх
				</p>
				<div className="grid grid-cols-3 items-center w-[280px] my-4 text-color-light">
					<div className="text-right wedding-time-title">
						16 Серпня
					</div>
					<div className="flex justify-center">
						<div className="w-[1px] h-18 bg-[#8d9685]" />
					</div>
					<div className="text-left wedding-time-title">
						4:45{" "}
						<span className="wedding-time-title-span">P.M</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col mt-12 items-center">
				<h1 className="mb-8 wedding-maint-title text-color-light">
					Dress Code
				</h1>

				<div className="flex gap-4 mt-0 my-4">
					<div className="w-10 h-10 rounded-full bg-[#c4d99c]" />
					<div className="w-10 h-10 rounded-full bg-[#f0e3a8]" />
					<div className="w-10 h-10 rounded-full bg-[#feb68d]" />
					<div className="w-10 h-10 rounded-full bg-[#f5c3c2]" />
					<div className="w-10 h-10 rounded-full bg-[#ffa346]" />
				</div>

				<p className="text-color-light mb-4 px-8 sm:px-32 md:px-32 text-center">
					Любі гості, наше свято буде мати бажаний дрес-код, тому ми
					зібрали добірку з ідеями для образів. Або можете
					орієнтуватися на основні кольори та їхні відтінки. Вони
					можуть стати як основою, так і яскравим акцентом Вашого
					образу. Тож ми з нетерпінням очікуємо на Вас незважаючи ні
					на що, найголовніше щоб Вам було комфортно!
				</p>
				<Button
					variant="contained"
					sx={{ color: "white", backgroundColor: "#8d9685" }}
					onClick={() =>
						window.open(
							"https://uk.pinterest.com/harazhaolga/dress-code/?invite_code=749915b44fe448f6af226207c1d7fc48&sender=793759640482678546",
							"_blank"
						)
					}>
					Дрес-Код
				</Button>
			</div>
		</>
	);
};
