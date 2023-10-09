<script lang="ts">
  export let maxTries: number, tries: number;
</script>

<section>
  <p>Tries ({tries}/{maxTries}):</p>
  <div>
    {#each Array(maxTries) as _, i}
      <span class="try {i < tries ? 'lost' : ''}" />
    {/each}
  </div>
</section>

<style>
  div {
    display: flex;
    gap: 5px;
  }

  section {
    display: flex;
    gap: 1rem;
    align-items: center; 
  }
  
  .try {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-gray-dark);
    color: var(--color-white);
    font-size: var(--font-medium);
  }

  .try.lost {
    background-color: var(--color-purple);
  }
</style>
