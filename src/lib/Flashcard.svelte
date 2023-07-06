<script lang="ts">
	export let clue;
	export let answer;
	export let showCardBack : Boolean;
	
	const flipCard = () => {
		showCardBack = !showCardBack;
	}
</script>


<div class="flip-box-front" on:click={flipCard}>
	<div id="image-cont">
		<img src={clue} alt={answer} />
	</div>
</div>

<div class="flip-box-back" class:conceal-answer={showCardBack} on:click={flipCard}>
	<h2>Answer: <br/>{answer}</h2>
</div>


<style>
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer; /* Added cursor pointer to indicate clickable area */
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

	.flip-it {
    transform: rotateY(180deg);
  }


	img {
		max-height: 80%;
		object-fit: contain;
		border-radius: 10px;
	}

	h2 {
		text-align: center;
	}

</style>
