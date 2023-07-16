<script lang="ts">
	import type { EducationInterface, InfoPointInterface, JobInterface } from '../types/index';
	import CareerPoint from './CareerPoint.svelte';
	import EducationPoint from './EducationPoint.svelte';
	import InfoPoint from './InfoPoint.svelte';

	export let header: string;
	export let points: (InfoPointInterface | JobInterface | EducationInterface)[];
	export let classes: string = '';
</script>

<div class={`${classes} flex flex-col gap-3 w-full md:w-1/2`}>
	<h3 class="text-center text-[1.2rem]">{header}</h3>

	{#each points as point}
		{#if point.discriminator === 'JobInterface'}
			<CareerPoint job={point} />
		{:else if point.discriminator === 'EducationInterface'}
			<EducationPoint {point} />
		{:else if point.discriminator === 'InfoPointInterface'}
			<InfoPoint {point} />
		{/if}
	{/each}
</div>
