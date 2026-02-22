// public/scripts/perfil-dinamico.js
document.addEventListener("DOMContentLoaded", () => {
  const contenido = document.getElementById("contenido-dinamico");
  if (!contenido) return;

  const actualizarContenido = (html) => {
    contenido.style.opacity = "0";
    setTimeout(() => {
      contenido.innerHTML = html;
      contenido.style.opacity = "1";
    }, 300);
  };

  window.addEventListener("perfilChange", (e) => {
    const perfil = e.detail.perfil;
    let html = "";

    if (perfil === "turista") {
      html = `
        <p class="text-lg md:text-xl mb-8">
          Un bosque precioso y fácil de recorrer. Ideal para pasear en familia o disfrutar de la naturaleza gallega. Ruta de unos 10 km con senderos bien señalizados y vistas espectaculares al río Eume.
        </p>

        <h3 class="text-2xl font-medium text-emerald-200 mb-4">Lo que no te puedes perder</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-200">
          <li>El Monasterio de Caaveiro rodeado de vegetación exuberante</li>
          <li>El río Eume con aguas cristalinas</li>
          <li>Áreas de picnic y zonas de descanso</li>
        </ul>

        <p class="mt-8 text-lg">
          <strong>Dificultad:</strong> Baja-media | <strong>Tiempo aproximado:</strong> 3–4 horas | <strong>Recomendación:</strong> Lleva calzado cómodo y agua.
        </p>
      `;
    } else if (perfil === "educativo") {
      html = `
        <p class="text-lg md:text-xl mb-8">
          Fragas do Eume es uno de los bosques atlánticos mejor conservados de Europa. Alberga robles centenarios (Quercus robur), castaños, abedules y más de 200 especies de líquenes. Es hábitat de nutria, corzo, gato montés y aves como el pico picapinos. Estos bosques capturan grandes cantidades de CO₂ y son clave para la biodiversidad gallega.
        </p>

        <h3 class="text-2xl font-medium text-emerald-200 mb-4">Especies destacadas</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-200">
          <li>Roble albar (Quercus robur) – símbolo del bosque atlántico</li>
          <li>Helechos relictos del Terciario</li>
          <li>Más de 200 especies de líquenes</li>
          <li>Nutria y trucha en el río Eume</li>
        </ul>

        <p class="mt-8 text-lg">
          <strong>Importancia ecológica:</strong> Reserva de biodiversidad y sumidero de carbono. Amenazado por cambio climático y especies invasoras en bordes.
        </p>
      `;
    } else if (perfil === "tecnico") {
      html = `
        <p class="text-lg md:text-xl mb-8">
          Masa mixta caducifolia con dominio de Quercus robur (edad media 150–300 años, densidad 400–600 árboles/ha). Subbosque rico en helechos relictos y líquenes. Riesgo incendio moderado en bordes por proximidad a repoblaciones de eucalipto. Pendiente media 8–12%, suelos ácidos y húmedos.
        </p>

        <h3 class="text-2xl font-medium text-emerald-200 mb-4">Datos silvícolas clave</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-200">
          <li>Composición: 60–70% Quercus robur, resto Betula pendula, Castanea sativa, Alnus glutinosa</li>
          <li>Volumen maderable estimado: 250–400 m³/ha (aprovechamiento sostenible posible)</li>
          <li>Riesgos: Procesionaria en pinos adyacentes, eucaliptización progresiva en márgenes</li>
          <li>Gestión: Planes de restauración activa por la Xunta (eliminación exóticas, fomento autóctonas)</li>
        </ul>

        <p class="mt-8 text-lg">
          <strong>Recomendación:</strong> Monitoreo de plagas y evaluación de potencial bioeconómico (castaña, madera noble).
        </p>
      `;
    }

    actualizarContenido(html);
  });
});
