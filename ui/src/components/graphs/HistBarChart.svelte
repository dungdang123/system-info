<script lang="ts">
    import Chart from 'chart.js/auto';

    const id = Date.now().toString();
    import { onDestroy, onMount } from "svelte";
    let chart: Chart;
    let updateInterval;
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;


    onMount(() => {
        canvas = document.getElementById(id) as HTMLCanvasElement;
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        chart = new Chart(ctx, {
            // @ts-ignore
            type: "line", 
            data: {
                labels: ["Current", "5s", '10s', '15s', '20s', '25s', '30s', '45s', '50s', '55s'],
                datasets: [{
                    label: 'CPU',
                    data: [10, 20, 23, 25, 29, 46, 51, 43, 31, 80, 89, 92, 72, 69],
                    borderWidth: 1,
                    backgroundColor: "#5773FF",
                }, {
                    label: 'Memory',
                    data: [21, 25, 24, 21, 29.5, 28, 26,32, 29, 21, 23, 18],
                    borderWidth: 1,
                    backgroundColor: "#3ACCE1",
                }]
            },
            options: {
                borderColor: "#B5B9C0",
                showLine: true,
                color: "black",
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        canvas.style.backgroundColor= "var(--white--)";

    });




</script>
  
<canvas bind:this={canvas} id={id}></canvas>



<style>


    canvas {
        width: 100%;
        background-color: #333;
    }


    @media only screen and (max-width: 1080px) {

    canvas { 
      width: 95%;  
    }
}
</style>