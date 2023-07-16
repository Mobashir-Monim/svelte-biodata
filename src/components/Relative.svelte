<script lang="ts">
	import type { RelativeInterface } from '../types';

	export let relative: RelativeInterface;
</script>

<div class="flex flex-col gap-0 w-full max-w-[350px] mx-auto">
	<span class="border-b flex flex-row justify-between">
		<span class="!font-semibold">{relative.name}</span>
		<span class="text-[0.7rem] my-auto">({relative.relation})</span>
	</span>
	{#if relative.spouse}
		<span class="text-[0.8rem]"><b>Spouse:</b> {relative.spouse}</span>
	{/if}
	<span class="text-[0.8rem]">{relative.occupation}</span>
</div>
