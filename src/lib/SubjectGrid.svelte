<script>
    import SubjectBox from './SubjectBox.svelte';
  
    let subjects = [
      {
        id: 'us-history',
        title: 'History of the United States',
        icon: 'https://www.excelsior.edu/wp-content/uploads/2018/08/United-States-History_blog.png', // replace with real path
        flashcards: [
          {
            question: "What was the name of the candidate who won only 39% of the popular vote but a clear majority of votes in the Electoral College in 1860?",
            answer: "Abraham Lincoln."
          },
          {
            question: "What happened in the Civil War?",
            answer: "The Union won an almost uninterrupted series of victories on the Atlantic coast and on the Mississippi River, while they met defeat after defeat in Virginia."
          },
          {
            question: "What was the main reason why some people opposed popular elections in the United States during the Constitutional Convention?",
            answer: "Some people opposed popular elections because they believed that the national government should have as broad a popular base as possible."
          },
          {
            question: "What were the advantages of the North in the Civil War?",
            answer: "The North had more states, people, and resources, as well as superior railway networks and war-producing facilities."
          },
          {
            question: "What was the cause of the Civil War?",
            answer: "The Civil War was fought between the Union (the North) and the Confederacy (the South) over issues such as states' rights, slavery, and tariffs. The South seceded from the Union because they believed that Abraham Lincoln, who was elected as President in 1860, would be bad for their interests. The war began when Confederate forces fired on Fort Sumter, a Union-held fort in South Carolina."
          }
        ]
      },
      {
        id: 'meditation',
        title: 'Meditation technique',
        icon:'https://img.freepik.com/free-photo/full-shot-adult-meditating_23-2149711525.jpg',
        flashcards : [    {
      question: "What is the technique of repeating a word or phrase in coordination with breathing?",
      answer: "It's called 'mantra meditation.'"
    },
    {
      question: "What is the technique to quiet the mind?",
      answer: "Perform a technique that will help quiet the mind, such as deep breathing or progressive muscle relaxation."
    },
    {
      question: "What are movement meditations?",
      answer: "Movement meditations are techniques that use physical movements to achieve mental and emotional clarity."
    }]
      }
    ];
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    {#each subjects as subject (subject.id)}
      <SubjectBox {subject} />
    {/each}
  </div>
  