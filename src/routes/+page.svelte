<script>
  import SubjectGrid from "$lib/SubjectGrid.svelte";
	export let form;
</script>


<main>
	<h1 class="text-2xl font-bold">Ready to learn?</h1>
	<p>Choose a course or upload new material to begin your journey.</p>
  <SubjectGrid />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
	padding-top: 10vh;
  }
</style>
