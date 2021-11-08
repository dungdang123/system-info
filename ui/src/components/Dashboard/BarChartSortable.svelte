<script lang="ts">
    import { scale } from "svelte/transition";
    import HistBarChart from "../graphs/HistBarChart.svelte";
    
</script>


<main class="card" in:scale={{duration: 700,}}>
    <div class="top-pannel">

    </div>

    <div class="chart-container"><HistBarChart /></div>
</main>



<style> 

    .chart-container {margin: auto;}

    .top-pannel {
        padding: 20px;
    }

    main {
        padding: 20px;
    }

    @media only screen and (max-width: 1080px) {

        main {

            margin-top: 20px;
        }
    }

</style>