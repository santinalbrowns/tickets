<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<header>
    <h1>E-Ticketing and Attendance Tracking System</h1>
    <nav>
        <img src="Logo.jpg" alt="logo">
        <a href="/home">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/match">Match</a>
        <a href="/confirm">Confirmation</a>
    </nav>
</header>

{@render children()}