<script lang="ts">
	import { onDestroy } from 'svelte'
	import { register, unregister } from 'svelte-relative-time'

	export let date: Date | number
	export let locale: string
	export let live = true

	let instance = new Object()
	let count = 0
	let units = ''
	let text = ''

	register(instance, date, locale, live, value => ({ count, units, text } = value))

	onDestroy(() => unregister(instance))
</script>

<span class={$$props.class} data-count={count} data-units={units}>{text}</span>

<style>
	span[data-units="seconds"] {
		color: #03301f;
	}
	span[data-units="minutes"] {
		color: #11563a;
	}
	span[data-units="hours"] {
		color: #126945;
	}
	span[data-units="days"] {
		color: #108554;
	}
	span[data-units="weeks"] {
		color: #0fa968;
	}
	span[data-units="months"] {
		color: #1acd81;
	}
	span[data-units="years"] {
		color: #43e5a0;
	}
</style>