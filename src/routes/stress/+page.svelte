<script lang="ts">
	import { relativeTime } from 'svelte-relative-time'

	const count = new Array(10000)
	const date = Date.now()
	const locale = 'en'

	function randomDate() {
		return date + Math.random() * 1000000 - 500000
	}
</script>

{#each count as _}
	<span class="inline-block w-32" use:relativeTime={{ date: randomDate(), locale }} />
{/each}
