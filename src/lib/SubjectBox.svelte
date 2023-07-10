<script>
  import { goto } from '$app/navigation';
  export let subject;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={subject.icon} alt={subject.title} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{subject.title}</h2>
    <p>{subject.title} flashcards</p>
    <div class="card-actions">
      <button class="btn btn-primary" on:click={() => goto(`/subject/${subject.id}`)}>Start learning</button>
    </div>
  </div>
</div>
