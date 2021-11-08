
<script lang="ts">
    export let pagename = "Dashboard";
</script>


<!-- Top Navigation and Informational Pannel-->
<header class="header-section">
    <div class="left-header">
        <h2 class="header-text">{pagename}</h2>
    </div>
</header>



<style>

    header {
        width: 100%;
        padding: 10px 0px 13px 0px;
        align-items: center;
        display: flex;
    }

    h2 {
        margin-left: 10px;
        font-size: 1.9em;
        font-weight: 400;
    }

    @media only screen and (max-width: 820px) {

        header {
            margin: auto;
            margin-bottom: 20px;
            width: 90%;
        }
    }

</style>