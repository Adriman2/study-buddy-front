<h1>Find in text! </h1>

<script>
    let searchText = '';
    let findings = [
        {
            text: "Findings about the Civil War",
            response: "The Civil War was fought between the Union (the North) and the Confederacy (the South) over issues such as states' rights, slavery, and tariffs."
        },
        {
            text: "Advantages of the North in the Civil War",
            response: "The North had more states, people, and resources, as well as superior railway networks and war-producing facilities."
        },
        {
            text: "Elections in the United States during the Constitutional Convention",
            response: "Some people opposed popular elections because they believed that the national government should have as broad a popular base as possible."
        }
        // more dummy data...
    ];

    const searchInText = () => {
        // perform search logic here
    };
</script>

<div class="form-control">
    <div class="input-group">
        <input bind:value={searchText} type="text" placeholder="Search in Text…" class="input input-bordered" />
        <button on:click={searchInText} class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</div>

<div style="overflow: auto; height: 300px;">
    {#each findings as finding (finding.text)}
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Text: {finding.text}</h2>
            <p>{finding.response}</p>
        </div>
    </div>
    {/each}
</div>
