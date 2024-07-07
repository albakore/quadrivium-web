import SeccionContacto from "@/components/sections/SeccionContacto";
import SeccionHero from "@/components/sections/SeccionHero";
import SeccionMision from "@/components/sections/SeccionMision";
import SeccionServicios from "@/components/sections/SeccionServicios";
import SeccionUnirse from "@/components/sections/SeccionUnirse";
import SeccionVision from "@/components/sections/SeccionVision";

export default function Home() {
  return (
    <main>
        <SeccionHero/>
        <SeccionServicios/>
        <SeccionMision/>
        <SeccionVision/>
        <SeccionUnirse/>
        {/* <SeccionContacto/> */}
    </main>
  );
}
