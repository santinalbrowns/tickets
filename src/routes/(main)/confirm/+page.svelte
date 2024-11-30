<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<main>
    <h2>Thank you for your purchase!</h2>
    <h3>Ticket Details</h3>
    <p>Match: Civo United vs Bangwe All Stars</p>
    <p>Date: 2024-09-22</p>
    <p>Time: 14:30</p>
    <p>Venue: Civo Stadium</p>
    <p>Category: Premium</p>
    <p>Quantity: 2</p>
    <img src="qrcode.png" alt="QR Code">
</main>