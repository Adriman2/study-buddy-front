<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let activity;
</script>

<!-- An icon should be included that is appropriate for the Activity -->
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <h2 class="card-title">{activity.title}</h2>
    <div class="card-actions">
      <button class="btn btn-primary" on:click={() => {dispatch('activitySelected', activity.slug);}}>
        Start
      </button>
    </div>
  </div>
</div>
