<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import UploadForm from "$lib/UploadForm.svelte";
  let showForm = false;
  const toggleShowForm = () => (showForm = !showForm);
</script>

<div>
  <Navbar {showForm} {toggleShowForm} />
  <UploadForm {showForm} {toggleShowForm} />
<slot/>
</div>