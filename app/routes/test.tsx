import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function UI() {
  return (
    <div className="max-w-screen-md m-auto h-screen p-4">
      <div className="w-full h-full p-4 rounded-2xl text-sm">
        <div className="flex flex-row items-center">
          <h1 className="text-7xl text-green-700 px-4 font-bold">
            <span className="text-pink-400">R</span>
            <span className="text-blue-400">u</span>
            <span className="text-green-400">m</span>
            <span className="text-red-300">i</span>{" "}
            <span className="text-violet-400">'s</span>
          </h1>

          <div className="w-32">
            <img className="object-cover" src="/logo.png" />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-semibold">
            Welcome to <span className="text-purple-700">Rumi's</span>
            enterprice
          </h2>
          <h3 className="text-base font-semibold">Pulseras</h3>
          <p className="text-sm mb-12">
            El arte y la innovación nos caracteriza. En Rumi's encontrarás
            <br />
            pulseras de la más alta calidad, hechas de piedras cuarzo, <br />
            importadas y tratadas por expertos artesanos
            <br />
          </p>
          <div className="flex flex-row justify-between  items-center py-6 px-4 rounded-3xl bg-white relative shadow-xl overflow-hidden border">
            {/* bread */}
            <div className="absolute bg-green-600 top-0 left-0 px-4 py-1 text-xs text-white font-semibold rounded-br-3xl">
              Producto nuevo
            </div>
            <div className="flex flex-col gap-6">
              <p className="line-clamp-4 w-80">
                💗 Cuarzo Rosa – La Piedra del Amor 💗 El cuarzo rosa es conocido
                por atraer el amor y la armonía. Su energía suave promueve la
                paz interior, la autoestima y las relaciones saludables.
                Perfecto para equilibrar emociones y llenar tu vida de
                vibraciones positivas. ¡Ideal para regalos con intención esp
                ecial! ✨🌸
              </p>
              <Button variant={"link"} className="font-semibold text-sm ">
                Ver más <ArrowRight />
              </Button>
            </div>

            <div className="w-80">
              <img
                className="object-cover"
                src="https://marianafresan.com/wp-content/uploads/2023/10/cuarzo-rosa-mineral.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center p-4 rounded-3xl bg-white relative overflow-hidden mt-5 shadow-md">
            {/* bread */}
            <div className="absolute bg-green-600 top-0 left-0 px-4 py-1 text-xs text-white font-semibold rounded-br-3xl">
              Producto nuevo
            </div>
            <p className="mt-8 w-60">
              💗 Cuarzo Rosa – La Piedra del Amor 💗 El cuarzo rosa es conocido
              por atraer el amor y la armonía. Su energía suave promueve la paz
              interior, la autoestima y las relaciones saludables. Perfecto para
              equilibrar emociones y llenar tu vida de vibraciones positivas.
              ¡Ideal para regalos con intención especial! ✨🌸
            </p>
            <div className="w-80">
              <img
                className="object-cover"
                src="https://acdn-us.mitiendanube.com/stores/135/551/products/14-piiedras-celestes1-4917948987866f228816286020964867-1024-1024.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center p-4 rounded-3xl bg-white relative overflow-hidden mt-5 shadow-md">
            {/* bread */}
            <div className="absolute bg-green-600 top-0 left-0 px-4 py-1 text-xs text-white font-semibold rounded-br-3xl">
              Producto nuevo
            </div>
            <p className="mt-8 w-60">
              💗 Cuarzo Rosa – La Piedra del Amor 💗 El cuarzo rosa es conocido
              por atraer el amor y la armonía. Su energía suave promueve la paz
              interior, la autoestima y las relaciones saludables. Perfecto para
              equilibrar emociones y llenar tu vida de vibraciones positivas.
              ¡Ideal para regalos con intención especial! ✨🌸
            </p>
            <div className="w-80">
              <img
                className="object-cover"
                src="https://cdnx.jumpseller.com/la-greca-beauty/image/24077920/piedras__2_.png.png?1652239747"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
