// src/components/PerfilSelector.tsx
import { useState } from "react";

type PerfilType = "turista" | "educativo" | "tecnico";

interface PerfilSelectorProps {
  onChange?: (perfil: PerfilType) => void;
}

export default function PerfilSelector({ onChange }: PerfilSelectorProps) {
  const [perfil, setPerfil] = useState<PerfilType>("turista");

  const handleClick = (nuevoPerfil: PerfilType) => {
    setPerfil(nuevoPerfil);
    onChange?.(nuevoPerfil);

    // Dispara evento personalizado para que Astro lo escuche y actualice el contenido
    window.dispatchEvent(
      new CustomEvent("perfilChange", { detail: { perfil: nuevoPerfil } }),
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          perfil === "turista"
            ? "bg-emerald-600 text-white shadow-lg scale-105"
            : "bg-gray-700/80 text-gray-300 hover:bg-gray-600"
        }`}
        onClick={() => handleClick("turista")}
      >
        Turista / Senderista casual
      </button>

      <button
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          perfil === "educativo"
            ? "bg-emerald-600 text-white shadow-lg scale-105"
            : "bg-gray-700/80 text-gray-300 hover:bg-gray-600"
        }`}
        onClick={() => handleClick("educativo")}
      >
        Educativo / Ambiental
      </button>

      <button
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          perfil === "tecnico"
            ? "bg-emerald-600 text-white shadow-lg scale-105"
            : "bg-gray-700/80 text-gray-300 hover:bg-gray-600"
        }`}
        onClick={() => handleClick("tecnico")}
      >
        Técnico forestal
      </button>
    </div>
  );
}
