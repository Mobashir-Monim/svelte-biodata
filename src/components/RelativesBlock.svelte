<script lang="ts">
	import type { RelativeInterface } from '../types/index';
	import Relative from './Relative.svelte';

	export let branch: string;
	export let relatives: RelativeInterface[];
	export let classes: string = '';
</script>

<div class={`${classes} flex flex-col gap-5 w-full md:w-1/2 justify-between`}>
	<h3 class="text-center font-semibold text-[1.2rem]">
		{branch[0].toUpperCase()}{branch.slice(1)} Family
	</h3>

	{#each relatives as relative}
		<Relative {relative} />
	{/each}
</div>
