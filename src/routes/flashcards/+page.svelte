<script>
    import { vocab } from "$lib/vocabData.js";
    import Flashcard from "$lib/Flashcard.svelte";
    import { enhance } from "$app/forms";
    export let form;
  
    let flashcardIndex = 0;
    $: clue = vocab[flashcardIndex].image;
    $: answer = vocab[flashcardIndex].word;
  
    let showCardBack = false;
    const toggleShowBack = () => (showCardBack = !showCardBack);

    const prevCard = () => {
      showCardBack = false;
      if (flashcardIndex === 0) {
        flashcardIndex = vocab.length - 1;
      } else {
        flashcardIndex -= 1;
      }
    };
  
    const nextCard = () => {
      showCardBack = false;
      if (flashcardIndex === vocab.length - 1) {
        flashcardIndex = 0;
      } else {
        flashcardIndex += 1;
      }
    };

  </script>
  

<div class="flip-box">
    <div class="flip-box-inner" class:flip-it={showCardBack}>
      <Flashcard {clue} {answer} {showCardBack} />
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
      justify-content: space-around; /* Added this line */
      height: 100vh;
    }
  
    .flip-box {
      background-color: transparent;
      width: 400px;
      height: 300px;
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
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
  
    #btn-cont {
      width: 400px; /* Adjust to match flip-box width */
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
    }
  
    button {
      background: #007aff; /* Apple brand blue color */
      padding: 10px 15px;
      color: white;
      cursor: pointer;
      border: none;
      border-radius: 12px; /* Apple's buttons often have larger border radius */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
      font-weight: 600;
      transition: background-color 0.2s ease-out;
    }
  
    button:active {
      background-color: #0051d4; /* Darker blue on active click */
    }
  </style>
  