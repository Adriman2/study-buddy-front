<h1>Ask your buddy</h1>

<script>
    let searchInput = '';
    let questions = [
        {
            question: "What was the name of the candidate who won only 39% of the popular vote but a clear majority of votes in the Electoral College in 1860?",
            response: "Abraham Lincoln."
        },
        {
            question: "What happened in the Civil War?",
            response: "The Union won an almost uninterrupted series of victories on the Atlantic coast and on the Mississippi River, while they met defeat after defeat in Virginia."
        },
        {
            question: "What was the main reason why some people opposed popular elections in the United States during the Constitutional Convention?",
            response: "Some people opposed popular elections because they believed that the national government should have as broad a popular base as possible."
        },
        {
            question: "What were the advantages of the North in the Civil War?",
            response: "The North had more states, people, and resources, as well as superior railway networks and war-producing facilities."
        },
        {
            question: "What was the cause of the Civil War?",
            response: "The Civil War was fought between the Union (the North) and the Confederacy (the South) over issues such as states' rights, slavery, and tariffs. The South seceded from the Union because they believed that Abraham Lincoln, who was elected as President in 1860, would be bad for their interests. The war began when Confederate forces fired on Fort Sumter, a Union-held fort in South Carolina."
        }
    ];

    const searchQuestion = () => {
        // perform search logic here
    };
</script>

<div class="form-control">
    <div class="input-group">
        <input bind:value={searchInput} type="text" placeholder="Ask your buddy " class="input input-bordered" />
        <button on:click={searchQuestion} class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</div>

<div class="gap-4 flex flex-col pt-6" style="overflow: auto; height: 600px; ">
    {#each questions as question (question.question)}
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Question: {question.question}</h2>
            <p>{question.response}</p>
        </div>
    </div>
    {/each}
</div>
