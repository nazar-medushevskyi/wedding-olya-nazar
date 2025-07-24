export const CircleTimer = ({
	value,
	label,
}: {
	value: string;
	label: string;
}) => {
	return (
		<div className="flex flex-col items-center">
			<div className="circle w-24 h-24 bg-gray-800 text-white rounded-full flex items-center justify-center">
				<span className="text-2xl font-bold">{value}</span>
			</div>
			<div className="mt-2 text-sm text-gray-700">{label}</div>
		</div>
	);
};
