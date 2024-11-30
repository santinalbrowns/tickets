<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<main>
    <h2>Match: Civo United vs Bangwe All Stars</h2>
    <p>Date: 2024-09-22</p>
    <p>Time: 14:30</p>
    <p>Venue: Civo Stadium</p>
    <h3>Choose Seats</h3>
    <form id="seatSelection">
        <label for="category">Category:</label>
        <select id="category" name="category">
            <option value="premium">Premium</option>
            <option value="regular">Regular</option>
            <option value="standing">Standing</option>
        </select>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10">
        <button type="submit">Proceed to Checkout</button>
    </form>
</main>