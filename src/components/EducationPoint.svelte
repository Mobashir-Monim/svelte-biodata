<script lang="ts">
	import type { EducationInterface } from '../types';
	import DateRangeBlock from './DateRangeBlock.svelte';

	export let point: EducationInterface;
</script>

<div class="flex flex-col gap-0 w-full max-w-[320px] mx-auto">
	<span class="border-b font-semibold flex flex-row justify-between">
		<span>{point.title}</span>
	</span>
	<span class="text-[0.8rem] text-right ml-auto">{point.institution}</span>
	<DateRangeBlock start={point.from} end={point.end} />
</div>
