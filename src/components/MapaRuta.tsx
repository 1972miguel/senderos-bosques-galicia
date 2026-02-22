// src/components/MapaRuta.tsx
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige iconos por defecto de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapaRuta() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    try {
      // Inicializa mapa
      const map = L.map(mapRef.current, {
        zoomControl: true,
        attributionControl: true,
      }).setView([43.36, -8.04], 13); // Centro aproximado Fragas do Eume

      // Tile OpenTopoMap (tu elección final - verde con relieve)
      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
        maxZoom: 17,
      }).addTo(map);

      // Track realista aproximado de la ruta Fragas do Eume (puedes refinarlo)
      const rutaCoords: [number, number][] = [
        [43.352, -8.052], // Parking cerca del puente
        [43.356, -8.048], // Camino río arriba
        [43.36, -8.042], // Zona central fraga
        [43.364, -8.036], // Acercamiento al monasterio
        [43.367, -8.032], // Monasterio de Caaveiro
        [43.37, -8.028], // Punto alto / mirador aproximado
      ];

      L.polyline(rutaCoords, {
        color: "#006400", // Verde oscuro bosque
        weight: 7,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      })
        .addTo(map)
        .bindPopup("Ruta principal Fragas do Eume (aprox. 10 km)");

      // Marcadores con pop-ups
      L.marker([43.352, -8.052])
        .addTo(map)
        .bindPopup(
          "<b>Inicio / Parking</b><br>Acceso principal desde Pontedeume",
        );

      L.marker([43.367, -8.032])
        .addTo(map)
        .bindPopup(
          "<b>Monasterio de Caaveiro</b><br>Punto histórico y más visitado del bosque",
        );

      L.marker([43.37, -8.028])
        .addTo(map)
        .bindPopup(
          "<b>Mirador aproximado</b><br>Vistas panorámicas del bosque y río Eume",
        );

      // Control de geolocalización
      L.control
        .locate({
          position: "topright",
          drawCircle: true,
          showCompass: true,
          strings: {
            title: "Mostrar mi ubicación actual",
            popup: "Estás aquí (aprox.)",
          },
        })
        .addTo(map);

      // Escala en la esquina inferior izquierda
      L.control.scale({ position: "bottomleft" }).addTo(map);

      // Forzar redraw después de renderizado (soluciona problemas de tamaño)
      setTimeout(() => {
        map.invalidateSize();
      }, 400);

      mapInstance.current = map;
    } catch (err) {
      console.error("Error al crear el mapa:", err);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-96 md:h-[600px] w-full rounded-2xl border border-emerald-500/20 shadow-xl overflow-hidden bg-gray-800"
    />
  );
}
