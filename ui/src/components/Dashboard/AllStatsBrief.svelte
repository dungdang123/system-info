<script lang="ts">
    import { fly, scale } from "svelte/transition";
</script>


<main class="card" in:fly={{duration: 800, x: -80, y: -70}}>
    <div class="main-top">
        <h4>Current Load</h4> 
        <h2>45.4%</h2>
    </div>

    <div class="split-50" in:scale={{duration: 1000}}>
        <div class="stats-container B-R">
            <h5>CPU Usage</h5>
            <h3>29.4%</h3>
        </div>

        <div class="stats-container B-L">
            <h5>Memory Usage</h5>
            <h3>34.2%</h3>
        </div>
    </div>

    <div class="split-50" in:scale={{duration: 1000}}>
        <div class="stats-container B-R">
            <h5>Disks</h5>
            <h3>4</h3>
        </div>
    
        <div class="stats-container B-L">
            <h5>Network Bandwidth</h5>
            <h3>43.32 MB/s</h3>
        </div>
    </div>
</main>


<style>
    .main-top {
        padding: 20px;
        border: 4px solid transparent;
        border-radius: 8px;
        border-bottom: 4px solid var(--cream-white--);
    }

    h4 {
        font-weight: 400;
        font-size: 1em;
        color: var(--lighter-grey--);
    }

    .stats-container {
        padding: 20px 0px 20px 20px;
    }

    .B-R, .B-L {
        border: none;
    }

    .B-R {
        border-right: 2px solid var(--cream-white--) ;
    }

    .B-R {
        border-left: 2px solid var(--cream-white--) ;
    }

    h2 {
        color: var(--text--);
        font-weight: 400;
        padding: 25px 0px 10px 20px;
        font-size: 3em;
    }
    

    h5 {
        font-weight: 400;
        font-size: .7em;
        color: var(--lighter-grey--);
        padding-bottom: 10px;
    }

    h3 {
        font-weight: 400;
        font-size: 1.3em;
        color: var(--text--);
    }

    .split-50 {
        display: grid;
        grid-template-columns: 44% 56%;
    }

    /*@media only screen and (max-width: 1080px) and (min-width: 880px) {

    .split-50 {
        margin: auto;
        text-align: center;
        display: block;
    }
    
    h4 {
        text-align: center;
    }

    h2 {
        text-align: center;
        font-size: 1.8em;
    }

    h5 {
        font-size: .8em;
    }

    h3 {
        font-size: 1.7em;
    }

}

*/

</style>