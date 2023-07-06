<script>
    export let showForm;
    export let toggleShowForm;
  </script>
  
  <nav class="fixed w-full z-10 bg-white shadow-md">
    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div>
          <a class="text-xl font-bold text-gray-800" href="/">Study Buddy</a>
        </div>
        <div class="flex md:hidden">
          <button
            on:click={toggleShowForm}
            class="text-blue-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Open menu"
          >
            {showForm ? "✖️" : "➕"}
          </button>
        </div>
      </div>
      <div class={`md:flex items-center ${showForm ? "block" : "hidden"} md:block`}>
        <div class="flex flex-col md:flex-row md:mx-6">
          <button
            on:click={toggleShowForm}
            class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
          >
            {showForm ? "Close" : "Add Card"}
          </button>
        </div>
      </div>
    </div>
  </nav>
  
  <style>
    nav {
      transition: all 0.3s;
    }
    nav.bg-white {
      background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
      backdrop-filter: saturate(180%) blur(20px); /* Blur the background behind the navbar */
    }
  </style>
  