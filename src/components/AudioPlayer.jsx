// src/components/AudioPlayer.jsx
import { useEffect, useRef } from "react";
import { Howl } from "howler";

export default function AudioPlayer({ src = "/assets/sonido-bosque.mp3" }) {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.4,
      html5: true,
    });

    // Opcional: empieza automáticamente (comenta si prefieres botón)
    // soundRef.current.play();

    return () => {
      soundRef.current?.unload();
    };
  }, [src]);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold">Ambiente del bosque</h3>
      <div className="flex gap-6">
        <button
          onClick={play}
          className="bg-bosque-verde hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition"
        >
          Reproducir
        </button>
        <button
          onClick={pause}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-medium transition"
        >
          Pausar
        </button>
      </div>
    </div>
  );
}
