import Section from "@/components/Section";
import GuyImg from '../assets/pexels-katerina-holmes-5905861.jpg';
import LadyImg from '../assets/pexels-rdne-stock-project-6936406.jpg';

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen px-24 py-5">
        <Section reverse={false} image={LadyImg} />
        <Section reverse={true} image={GuyImg} />
        <Section reverse={false} image={LadyImg} />
        <Section reverse={true} image={GuyImg} />
      </main>
    </>
  )
}
