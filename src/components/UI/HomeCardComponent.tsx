import { ReactNode } from "react";

type HomeCardComponentProps = {
  content: ReactNode;

}
export default function HomeCardComponent(props: HomeCardComponentProps) {
  return <section className="w-full h-full p-5 border-black border-solid border-[1px] rounded-lg flex justify-center items-center shadow-black hover:shadow-2xl transition-shadow duration-200 ease-in-out">{props.content}</section>
}
