<script>
  import ActivityBox from "$lib/ActivityBox.svelte";
  import Flashcards from "$lib/Flashcards.svelte";
  import AskYourBuddy from "$lib/AskYourBuddy.svelte";
  import FindInText from "$lib/FindInText.svelte";
  import QuizMe from "$lib/QuizMe.svelte";


  let activities = [
    {
      title: "Flashcards",
      slug: "flashcards"
    },
    {
      title: "Ask your buddy",
      slug: "ask-your-buddy"
    },
    {
      title: "Find in text",
      slug: "find-in-text"
    },
    {
      title: "Quiz me",
      slug: "quiz-me"
    }
  ];

  let selectedActivity = '';
  let showActivities = true;

  const handleActivitySelection = (event) => {
    selectedActivity = event.detail;
    showActivities = false;
  }
</script>

<div class="flex flex-col items-center pt-16">
  {#if showActivities}
  <h1 class="text-2xl font-bold">How do you want to learn? </h1>
  <p>Select an activity:</p>
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {#each activities as activity (activity.slug)}
        <ActivityBox {activity} on:activitySelected={handleActivitySelection} />
      {/each}
    </div>
  {:else}
  <div class="w-full">
    <button class="btn btn-neutral m-2" on:click={() => { showActivities = true; }}>
      ◀️
    </button>
  </div>
    {#if selectedActivity === 'flashcards'}
      <Flashcards />
    {:else if selectedActivity === 'ask-your-buddy'}
      <AskYourBuddy />
    {:else if selectedActivity === 'find-in-text'}
      <FindInText />
    {:else if selectedActivity === 'quiz-me'}
      <QuizMe />
    {/if}
  {/if}
</div>
