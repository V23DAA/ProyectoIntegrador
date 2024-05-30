class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="sidebar" class="fixed left-0 h-full w-[250px] bg-[#1c3f53] transform -translate-x-full transition-transform duration-300 z-50 p-3">
    <ul class="mt-10 text-white">
        <li class="p-4 hover:bg-[#97c1e8] m-2 text-xl font-semibold rounded-lg"><a href="Home.html">INICIO</a></li>
        <li class="p-4 hover:bg-[#5c9dd8] m-2 rounded-lg"><a href="Calculadoras.html">Calculadoras corporales</a></li>
        <li class="p-4 hover:bg-[#5c9dd8] m-2 rounded-lg"><a href="Rutinas.html">Entrenamiento fisico</a></li>
        <li class="p-4 hover:bg-[#5c9dd8] m-2 rounded-lg"><a href="Catalogo.html">Catalogo comidas saludables</a></li>
        <li class="p-4 hover:bg-[#5c9dd8] m-2 rounded-lg"><a href="SaludMental.html">Area salud mental</a></li>
    </ul>
</div>
      `;
  }
}

customElements.define('custom-sidebar', Sidebar);

