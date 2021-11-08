<script lang="ts">
    import { location } from 'svelte-spa-router';

    // handle active nav-link
    const active_css = "active-tab";
    const ico_css = "nav-icon";

    $: tabs_active = {
        dashboard: ($location == "/")? active_css : ico_css,
        settings: ($location == "/settings")? active_css : ico_css,
        cpu: ($location == "/performance")? active_css : ico_css,
        network: ($location == "/network")? active_css : ico_css,
        process: ($location == "/process")? active_css : ico_css,
    }

    $: currentLocation = `#${$location}`; 
    // used for the minimize button and the close buttomn to make sure the user
    // does not switch pages after re-showing the app.
</script>

<nav>
    <div class="seperator"></div>
    <div class="navigation-left nav-side">
        <a href="#/" class={tabs_active.dashboard}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="dashboard_24px"><path id="icon/action/dashboard_24px" fill-rule="evenodd" clip-rule="evenodd" d="M10 13H4C3.44995 13 3 12.55 3 12V4C3 3.45 3.44995 3 4 3H10C10.55 3 11 3.45 11 4V12C11 12.55 10.55 13 10 13ZM10 21H4C3.44995 21 3 20.55 3 20V16C3 15.45 3.44995 15 4 15H10C10.55 15 11 15.45 11 16V20C11 20.55 10.55 21 10 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 8V4C13 3.45 13.45 3 14 3H20C20.55 3 21 3.45 21 4V8C21 8.55 20.55 9 20 9H14C13.45 9 13 8.55 13 8Z" /></g></svg>
            <p>Dashboard</p>
        </a>
        <a href="#/performance" class={tabs_active.cpu}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="memory_24px"><path id="icon/hardware/memory_24px" fill-rule="evenodd" clip-rule="evenodd" d="M21 10C21 9.45001 20.55 9 20 9H19V7C19 5.89999 18.1 5 17 5H15V4C15 3.45001 14.55 3 14 3C13.45 3 13 3.45001 13 4V5H11V4C11 3.45001 10.55 3 10 3C9.45001 3 9 3.45001 9 4V5H7C5.90002 5 5 5.89999 5 7V9H4C3.45001 9 3 9.45001 3 10C3 10.55 3.45001 11 4 11H5V13H4C3.45001 13 3 13.45 3 14C3 14.55 3.45001 15 4 15H5V17C5 18.1 5.90002 19 7 19H9V20C9 20.55 9.45001 21 10 21C10.55 21 11 20.55 11 20V19H13V20C13 20.55 13.45 21 14 21C14.55 21 15 20.55 15 20V19H17C18.1 19 19 18.1 19 17V15H20C20.55 15 21 14.55 21 14C21 13.45 20.55 13 20 13H19V11H20C20.55 11 21 10.55 21 10ZM10 9H14C14.55 9 15 9.45001 15 10V14C15 14.55 14.55 15 14 15H10C9.45001 15 9 14.55 9 14V10C9 9.45001 9.45001 9 10 9ZM11 13H13V11H11V13ZM8 17H16C16.55 17 17 16.55 17 16V8C17 7.45001 16.55 7 16 7H8C7.45001 7 7 7.45001 7 8V16C7 16.55 7.45001 17 8 17Z"/></g></svg>
            <p>Performance</p>
        </a>
        <a href="#/network" class={tabs_active.network}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="router_24px"><path id="icon/hardware/router_24px" fill-rule="evenodd" clip-rule="evenodd" d="M12.17 5.59C11.95 5.76001 11.64 5.73999 11.45 5.54999L11.4 5.5C11.17 5.26999 11.19 4.91 11.4301 4.70001C12.76 3.57001 14.38 3 16 3C17.6201 3 19.2401 3.57001 20.57 4.70001C20.8101 4.91 20.82 5.28 20.6 5.5L20.5601 5.54999C20.36 5.73999 20.05 5.76001 19.84 5.59C18.7 4.69 17.35 4.20001 16 4.20001C14.65 4.20001 13.3 4.69 12.17 5.59ZM13.11 7.10999C12.89 6.88998 12.9 6.50998 13.15 6.31C13.98 5.65997 14.99 5.29999 16 5.29999C17.01 5.29999 18.02 5.65997 18.85 6.29999C19.1 6.5 19.12 6.87 18.89 7.09998L18.85 7.13998C18.66 7.34 18.35 7.34998 18.13 7.17999C17.5 6.70999 16.75 6.5 16 6.5C15.25 6.5 14.5 6.70999 13.87 7.19C13.65 7.34998 13.35 7.34998 13.15 7.14999L13.11 7.10999ZM19 13H17V10C17 9.45001 16.55 9 16 9C15.45 9 15 9.45001 15 10V13H5C3.90002 13 3 13.9 3 15V19C3 20.1 3.90002 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM6 18H8V16H6V18ZM11.5 18H9.5V16H11.5V18ZM13 18H15V16H13V18Z" /></g></svg>
            <p>Disk / IO</p>
        </a>
        <a href="#/process" class={tabs_active.process}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="security_24px"><path id="icon/hardware/security_24px" fill-rule="evenodd" clip-rule="evenodd" d="M4.19 4.37625L11.19 1.26624C11.7 1.03625 12.3 1.03625 12.81 1.26624L19.81 4.37625C20.53 4.69626 21 5.41626 21 6.20624V10.9062C21 16.4562 17.16 21.6462 12 22.9062C6.84003 21.6462 3 16.4562 3 10.9062V6.20624C3 5.41626 3.46997 4.69626 4.19 4.37625ZM19 11.8962H12V3.09625L5 6.20624V11.9062H12V20.8362C15.72 19.6862 18.47 16.0163 19 11.8962Z"/></g></svg>
            <p>Monitoring</p>
        </a>

    </div>

    <div class="seperator"></div>


    <div class="navigation-right nav-side">

        <a href="#/settings" class="{tabs_active.settings}">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="settings_24px"><path id="icon/action/settings_24px" fill-rule="evenodd" clip-rule="evenodd" d="M19.5022 12C19.5022 12.34 19.4722 12.66 19.4321 12.98L21.5421 14.63C21.7322 14.78 21.7821 15.05 21.6621 15.27L19.6621 18.73C19.5421 18.95 19.2821 19.04 19.0521 18.95L16.5621 17.95C16.0421 18.34 15.4822 18.68 14.8722 18.93L14.4922 21.58C14.4621 21.82 14.2522 22 14.0022 22H10.0022C9.75218 22 9.5421 21.82 9.51219 21.58L9.13219 18.93C8.5222 18.68 7.96214 18.35 7.44212 17.95L4.95213 18.95C4.73216 19.03 4.46214 18.95 4.34215 18.73L2.34215 15.27C2.22215 15.05 2.2722 14.78 2.46214 14.63L4.57213 12.98C4.53209 12.66 4.50218 12.33 4.50218 12C4.50218 11.67 4.53209 11.34 4.57213 11.02L2.46214 9.37C2.2722 9.22 2.21214 8.95001 2.34215 8.73001L4.34215 5.26999C4.46214 5.04999 4.72215 4.95999 4.95213 5.04999L7.44212 6.04999C7.96214 5.66 8.5222 5.32001 9.13219 5.07001L9.51219 2.42001C9.5421 2.17999 9.75218 2 10.0022 2H14.0022C14.2522 2 14.4621 2.17999 14.4922 2.42001L14.8722 5.07001C15.4822 5.32001 16.0421 5.64999 16.5621 6.04999L19.0521 5.04999C19.2722 4.97 19.5421 5.04999 19.6621 5.26999L21.6621 8.73001C21.7821 8.95001 21.7322 9.22 21.5421 9.37L19.4321 11.02C19.4722 11.34 19.5022 11.66 19.5022 12ZM8.50218 12C8.50218 13.93 10.0721 15.5 12.0022 15.5C13.9322 15.5 15.5022 13.93 15.5022 12C15.5022 10.07 13.9322 8.5 12.0022 8.5C10.0721 8.5 8.50218 10.07 8.50218 12Z"/></g></svg>
            
            <p>Settings</p>
        </a>

        <a href={currentLocation} on:click|once={() => window.MAIN_API.Win.Exit()}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="clear_24px"><path id="icon/content/clear_24px" d="M18.3 5.70999C18.1132 5.52273 17.8595 5.4175 17.595 5.4175C17.3305 5.4175 17.0768 5.52273 16.89 5.70999L12 10.59L7.11 5.69999C6.92317 5.51273 6.66952 5.4075 6.405 5.4075C6.14048 5.4075 5.88683 5.51273 5.7 5.69999C5.31 6.08999 5.31 6.71999 5.7 7.10999L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10999C18.68 6.72999 18.68 6.08999 18.3 5.70999Z" /></g></svg>
            <p>Exit</p>
        </a>
    </div>
    <div class="seperator"></div>
</nav>

<style>


    nav {
        z-index: 100;
        position: fixed;
        -webkit-app-region: drag;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .nav-side {
        display: grid;
        grid-template-columns: 100%;
        align-items: center;
    }
    .seperator {
        margin-top: 70px;
    }

    a {
        font-size: 1.1em;
        color: var(--lighter-grey--);
        text-align: left;
        transition: border-color 10s color .3s;
        border: 3px solid transparent;
        -webkit-app-region: no-drag;
        user-select: none;
        text-decoration: none;
        width: 180px;
        padding: 10px;
        fill: var(--lighter-grey--);
        display: flex;
        align-items: center;
        font-weight: 400;
    }

    p {
        margin-left: 20px;
    }


    svg {
        width: 25px;
        height: 25px;
    }

    a, .active-tab {
        transition: border-left-color .3s, color .3s, padding .3s;
    }

     .active-tab {
        border-left-color: var(--blue--);
    }



    .active-tab {
        padding: 17px 10px 14px 14px;
        font-weight: 600;
        fill: var(--blue--);
        color: var(--blue--);
    }


    @media only screen and (max-width: 1320px) {

        p{ 
            display: none;
        }

        a {
            width: 30px;
        }
    }

</style>
