<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<header>
    <h1>E-Ticketing and Attendance Tracking System</h1>
    <nav>
        <img src="Logo.jpg" alt="logo">
        <a href="Homee.html">Home</a>
        <a href="login.html">Login</a>
        <a href="register.html">Register</a>
        <a href="Match.html">Match</a>
        <a href="confirmation.html">Confirmation</a>
    </nav>
</header>

{@render children()}