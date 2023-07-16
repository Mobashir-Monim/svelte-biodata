<script lang="ts">
	import type {
		EducationInterface,
		InfoPointInterface,
		JobInterface,
		RelativeInterface
	} from '../types/index';
	import CareerPoint from './CareerPoint.svelte';
	import EducationPoint from './EducationPoint.svelte';
	import InfoPoint from './InfoPoint.svelte';
	import Relative from './Relative.svelte';

	export let header: string;
	export let points: (InfoPointInterface | JobInterface | EducationInterface | RelativeInterface)[];
	export let classes: string = '';
</script>

<div class={`flex flex-col gap-3 w-full md:w-1/2 ${classes} `}>
	<h3 class="text-center text-[1.2rem] font-semibold">{header}</h3>

	{#each points as point}
		{#if point.discriminator === 'JobInterface'}
			<CareerPoint job={point} />
		{:else if point.discriminator === 'EducationInterface'}
			<EducationPoint {point} />
		{:else if point.discriminator === 'InfoPointInterface'}
			<InfoPoint {point} />
		{:else}
			<Relative relative={point} />
		{/if}
	{/each}
</div>
