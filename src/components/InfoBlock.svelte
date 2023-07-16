<script lang="ts">
	import type { InfoPointInterface } from '../types/index';
	import InfoPoint from './InfoPoint.svelte';

	export let header: string;
	export let points: InfoPointInterface[];
	export let classes: string = '';
</script>

<div class={`${classes} flex flex-col gap-3 w-full md:w-1/2`}>
	<h3 class="text-center text-[1.2rem]">{header}</h3>

	{#each points as point}
		<InfoPoint {point} />
	{/each}
</div>
