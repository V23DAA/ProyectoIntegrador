class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer class="py-4 flex p-8 bg-gradient-to-r from-[#65a0ad] to-[#1b6f82] w-full h-[350px] font-semibold text-cyan-50">
        <div class="w-[40%] p-3 flex items-center justify-center">
            <h1 class="text-xl">Contáctanos</h1>
            <img src="img/iconos/facebook.svg" alt="logo facebook" class="w-[30px] h-[30px] m-2">
            <img src="img/iconos/instagram.svg" alt="logo facebook" class="w-[30px] h-[30px] m-2">
            <img src="img/iconos/twitter.svg" alt="logo facebook" class="w-[30px] h-[30px] m-2">
        </div>
        <div class="w-[40%] p-3 flex items-center justify-center">
            <h1 class="text-xl">Comparte</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[30px] h-[30px] m-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
        </div>
    </footer>
      `;
    }
  }

  customElements.define('custom-footer', Footer);