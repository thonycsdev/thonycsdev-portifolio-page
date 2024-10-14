type ButtonProps = {
	iconSrc: string;
	alt: string;
	href?: string;
};
export default function ButtonComponent(
	props: ButtonProps
) {
	return (
		<button className="text-black flex justify-center items-center w-32 h-9 p-3 bg-paper-darker rounded-md hover:shadow-[-6px_6px_2px_-2px_#2C2610] text-lg cursor-pointer active:top-[1px] shadow-[-6px_6px_4px_-4px_#2C2610] hover:scale-105 transition-all ease-in-out duration-200">
			<img
				className="w-5 h-5"
				src={props.iconSrc}
				alt={props.alt}
			/>
		</button>
	);
}
