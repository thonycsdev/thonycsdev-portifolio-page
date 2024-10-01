
interface CarouselItemProps {
  src: string;
  alt: string;
}

function CarouselComponent() {
  return (
    <div className="grid grid-rows-4 grid-cols-1 gap-3">
      <div className="flex justify-center items-center bg-paper-darker h-16 rounded-xl border-black border"><img className="h-full " src="./csharp_logo.png" /> CSharp</div>
      <div className="flex justify-center items-center bg-paper-darker h-16 rounded-xl border-black border"><img className="h-full p-3" src="./net_core_logo.png" /> CSharp</div>
      <div className="flex justify-center items-center bg-paper-darker h-16 rounded-xl border-black border"><img className="h-full p-3" src="./js_logo.png" /> CSharp</div>
      <div className="flex justify-center items-center bg-paper-darker h-16 rounded-xl border-black border"><img className="h-full p-3" src="./react_icon.png" /> CSharp</div>
    </div>
  );
}

export default CarouselComponent;
