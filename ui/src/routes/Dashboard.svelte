<script lang="ts">
    import HeaderSection from "../components/HeaderSection.svelte";

    // Dashboard Main Components
    import AllStatsBrief from "../components/Dashboard/AllStatsBrief.svelte";
    import NetworkIoStats from "../components/Dashboard/NetworkIOStats.svelte";
    import UsageCircularChart from "../components/Dashboard/UsageCircularChart.svelte";
    import BarChartSortable from "../components/Dashboard/BarChartSortable.svelte";


</script>


<section>

    <HeaderSection pagename="Dashboard"/>

    <div class="split-top">
        <AllStatsBrief />
        <BarChartSortable />
    </div>

    <div class="split-bottom">
        <UsageCircularChart />
        <NetworkIoStats />
    </div>
</section>


<style>
    
    .split-top {
        display: grid;
        grid-template-columns: 40% 60%;
        width: 100%;
        margin-top: 30px;
    }

    .split-bottom {
        width: 100%;
        margin-top: 30px;
    }
</style>