<script>
  export let showForm = false;
  export let toggleShowForm;

  let title = "";
  let subject = "";
  let files = null;

  const submitForm = async () => {
      const formData = new FormData();
      formData.append('file', files[0]);

      const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData});


      // Clear the form
      title = "";
      subject = "";
      files = null;

      // Hide the form
      toggleShowForm();
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) toggleShowForm();
  };
</script>

  
  {#if showForm}
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      on:click={closeModal}
    >
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div
          class="bg-white rounded-lg text-left overflow-hidden transform transition-all shadow-xl w-3/4 md:w-1/2 lg:w-1/3 relative">
          <button class="absolute text-2xl right-4 top-4 text-gray-500 hover:text-gray-700" on:click={toggleShowForm}>&times;</button>
          <div class="px-6 pt-4 pb-2">
            <h2 class="text-2xl font-bold mb-2">Add course 📖</h2>
          </div>
          <form class="space-y-4 px-6 pt-2 pb-4" on:submit|preventDefault={submitForm}>
            <div>
                <label class="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  bind:value={title}
                  class=" input mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >Subject</label
                >
                <input
                  type="text"
                  bind:value={subject}
                  class=" input mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700"
                  >Upload PDF document</label
                >
                <input
                  type="file"
                  bind:files
                  class="mt-1 file-input file-input-primary block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >Upload PDF</button
                >
              </div>
          </form>
        </div>
      </div>
    </div>
  {/if}
  
  