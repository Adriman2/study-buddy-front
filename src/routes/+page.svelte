<script>
	import Navbar from "$lib/Navbar.svelte";
	import UploadForm from "$lib/UploadForm.svelte";
	export let form;

  let showForm = false;

  const toggleShowForm = () => (showForm = !showForm);


</script>

<Navbar {showForm} {toggleShowForm} />
<UploadForm {showForm} {toggleShowForm} />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; /* Added this line */
    height: 100vh;
  }
</style>
