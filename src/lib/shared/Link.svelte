<script lang="ts">
	import Button4 from '$lib/shared/fontSystem/button/button4/Button4.svelte';
	export let href:string;
</script>

<a class="link" {href}>
	<Button4 on:click>
		<slot />
	</Button4>
</a>