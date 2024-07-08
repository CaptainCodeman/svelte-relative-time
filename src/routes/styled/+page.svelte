<script lang="ts">
	import RelativeTime from './RelativeTime.svelte'

	const deltas = [100000000000, 10000000000, 1000000000, 100000000, 10000000, 100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]

	const now = Date.now()
	const locale = 'en'
</script>

<p class="mt-4 text-sm">
	You opened this page <RelativeTime class="font-semibold" date={Date.now()} {locale} />
</p>

<h2 class="mt-4 text-sm">With time set to "now":</h2>

<ul class="mt-4 ml-6 space-y-1 text-sm list-disc">
	{#each deltas as delta, i}
		<li><span class="inline-block w-48">+ {delta / 1000} seconds:</span><RelativeTime date={now + delta} {locale} /></li>
	{/each}

	<li><span class="inline-block w-48">+ 0 seconds</span><RelativeTime date={now} {locale} /></li>

	{#each deltas.reverse() as delta, i}
		<li><span class="inline-block w-48">- {delta / 1000} seconds:</span><RelativeTime date={now - delta} {locale} /></li>
	{/each}
</ul>
