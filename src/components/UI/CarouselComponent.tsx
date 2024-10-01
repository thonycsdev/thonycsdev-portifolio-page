
function CarouselComponent() {
  return (
    <div className="grid grid-rows-4 grid-cols-1 gap-3 justify-items-center">
      <div className="grid grid-cols-2 bg-paper-darker h-16 rounded-xl border-black border items-center justify-items-center"><img className="h-full" src="./csharp_logo.png" /> CSharp</div>
      <div className="grid grid-cols-2 bg-paper-darker h-16 rounded-xl border-black border items-center justify-items-center"><img className="h-full p-3" src="./net_core_logo.png" />.NET Core</div>
      <div className="grid grid-cols-2 bg-paper-darker h-16 rounded-xl border-black border items-center justify-items-center"><img className="h-full p-3" src="./js_logo.png" />JavaScript</div>
      <div className="grid grid-cols-2 bg-paper-darker h-16 rounded-xl border-black border items-center justify-items-center"><img className="h-full p-3" src="./react_icon.png" />React</div>
    </div>
  );
}

export default CarouselComponent;
