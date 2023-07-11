import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col px-24 py-5">
        <Navbar />
        <Section1 />
        <Section2 />
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  )
}
