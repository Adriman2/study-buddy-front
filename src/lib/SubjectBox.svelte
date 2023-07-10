<script>
  import { goto } from '$app/navigation';
  import { currentSubject } from '$lib/stores.js'; // import the store
  export let subject;
  
  const startLearning = () => {
    currentSubject.set(subject); // set the store value
    goto(`/subject/${subject.id}`);
  };
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={subject.icon} alt={subject.title} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{subject.title}</h2>
    <p>{subject.title} flashcards</p>
    <div class="card-actions">
      <button class="btn btn-primary" on:click={startLearning}>Start learning</button>
    </div>
  </div>
</div>
