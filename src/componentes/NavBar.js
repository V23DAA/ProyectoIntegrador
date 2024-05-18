class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#65a0ad] to-[#1b6f82] max-w-full flex justify-between py-4 px-3 items-center font-semibold 
      text-lg shadow-md text-cyan-50 sticky">
          <div class="lg:w-[20%] md:w-[35%] sm:w-[40%] flex">
              <button id="toggleSidebar" class="w-[50px] h-[50px] flex items-center mx-2 hover:bg-[#1b6f82] justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>          
              </button>
              <div class="flex flex-wrap items-center w-[80%] justify-around">
                  <img src="img/logo.jpg" alt="" class="w-[50px] h-[50px] rounded-full">
                  <h1>Salud en armonia</h1>
              </div>
          </div>
          
          <div class="flex flex-wrap lg:w-[15%] md:w-[30%] justify-around">
              <button class="flex justify-center items-center border-2 border-cyan-100 w-[50px] h-[50px] hover:bg-[#34a4bd] p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                </button>
          </div>        
      </nav>
      `;
    }
  }

  customElements.define('custom-navbar', Navbar);
  document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
});
