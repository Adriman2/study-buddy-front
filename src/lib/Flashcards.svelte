<script>
    let flashcards = [
      {
        "question": "What was the name of the candidate who won only 39% of the popular vote but a clear majority of votes in the Electoral College in 1860?",
        "answer": "Abraham Lincoln."
      },
      {
      "question": "What happened in the Civil War?",
      "answer": "The Union won an almost uninterrupted series of victories on the Atlantic coast and on the Mississippi River, while they met defeat after defeat in Virginia."
    },
    {
      "question": "What was the main reason why some people opposed popular elections in the United States during the Constitutional Convention?",
      "answer": "Some people opposed popular elections because they believed that the national government should have as broad a popular base as possible."
    },
    {
      "question": "What were the advantages of the North in the Civil War?",
      "answer": "The North had more states, people, and resources, as well as superior railway networks and war-producing facilities."
    },
    {
      "question": "What was the cause of the Civil War?",
      "answer": "The Civil War was fought between the Union (the North) and the Confederacy (the South) over issues such as states' rights, slavery, and tariffs. The South seceded from the Union because they believed that Abraham Lincoln, who was elected as President in 1860, would be bad for their interests. The war began when Confederate forces fired on Fort Sumter, a Union-held fort in South Carolina."
    }
    ];

    let flashcardIndex = 0;
    $: question = flashcards[flashcardIndex].question;
    $: answer = flashcards[flashcardIndex].answer;
  
    let showCardBack = false;
    const toggleShowBack = () => (showCardBack = !showCardBack);

    const prevCard = () => {
      showCardBack = false;
      if (flashcardIndex === 0) {
        flashcardIndex = flashcards.length - 1;
      } else {
        flashcardIndex -= 1;
      }
    };
  
    const nextCard = () => {
      showCardBack = false;
      if (flashcardIndex === flashcards.length - 1) {
        flashcardIndex = 0;
      } else {
        flashcardIndex += 1;
      }
    };

    const flipCard = () => {
      showCardBack = !showCardBack;
    }
</script>

<h1>Flashcard game</h1>
<div class="flip-box">
  <div class="flip-box-inner" class:flip-it={showCardBack}>
    <div class="flip-box-front" on:click={flipCard}>
      <div id="text-cont">
        <p>{question}</p>
      </div>
    </div>

    <div class="flip-box-back" class:conceal-answer={!showCardBack} on:click={flipCard}>
      <h2>Answer: <br/>{answer}</h2>
    </div>
  </div>
</div>

<!-- BUTTONS -->
<div id="btn-cont">
  <button class="arrow-btn" on:click={prevCard}>&#8592;</button>

  <button on:click={toggleShowBack}>
    {showCardBack ? "Hide Answer" : "Show Answer"}
  </button>

  <button class="arrow-btn" on:click={nextCard}>&#8594;</button>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Adjust this to space-between */
    height: calc(100vh - 50px); /* subtracting the height of title and buttons */
    padding: 25px 0; /* add some padding at the top and bottom */
  }

  .flip-box {
    background-color: transparent;
    width: 400px;
    height: 300px;
    perspective: 1000px; 
  }

  
    .flip-box-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.4s;
      transform-style: preserve-3d;
    }
  
    .flip-it {
      transform: rotateY(180deg);
    }
  
    .flip-box-front, .flip-box-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
      cursor: pointer; 
    }
  
    .flip-box-front {
      background-color: #f5f5f7;
      color: #1c1c1e;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
    }
  
    @keyframes revealTextSlowly {
      to { color: #1c1c1e }
    }
  
    .conceal-answer {
      animation: revealTextSlowly .3s forwards;
    }
  
    .flip-box-back {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f7;
      color: #1c1c1e;
      font-size: 1.4rem;
      font-weight: 500;
      transform: rotateY(180deg);
    }
  
    #image-cont {
      background-color: #f5f5f7;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    img {
      max-height: 80%;
      object-fit: contain;
      border-radius: 10px;
    }
  
    h2 {
      text-align: center;
    }
  
    #btn-cont {
      width: 400px; 
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
    }
  
    button {
      background: #007aff; 
      padding: 10px 15px;
      color: white;
      cursor: pointer;
      border: none;
      border-radius: 12px; 
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
      font-weight: 600;
      transition: background-color 0.2s ease-out;
    }
  
    button:active {
      background-color: #0051d4; 
    }
  </style>
  