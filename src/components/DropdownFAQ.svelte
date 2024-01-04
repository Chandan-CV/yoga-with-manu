<script>
    // @ts-nocheck
    
        export let question;
        export let answer;
         let open = false;
    </script>
    
    <div class="flex flex-col justify-center items-center w-2/3 ">
    
        <button class="flex flex-row justify-between bg-dark-purple mt-5 rounded-t-md p-3 cursor-pointer w-full" on:click={()=>{open = !open}} >
            <p class="text-xl tracking-wide font-light text-left">{question} </p>
            {#if open}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition ease-in-out delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition ease-in-out delay-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            {/if}
        </button>
        {#if open}
        <div class="bg-ultra-light-purple text-dark-green  w-full rounded-b-md transition ease-in-out delay-1000">
            <p class="text-xl tracking-wide  m-3">{answer}</p>
        </div>
        {/if}
    </div>