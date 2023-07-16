<script lang="ts">
	import type { JobInterface } from '../types';
	import DateRangeBlock from './DateRangeBlock.svelte';

	export let job: JobInterface;
</script>

<div class="flex flex-col gap-0 w-full max-w-[350px] mx-auto">
	<span class="border-b font-semibold flex flex-row justify-between">
		<span>{job.position}</span>
	</span>
	<span class="text-[0.8rem]">{job.company}</span>
	<DateRangeBlock start={job.start} end={job.end} />
</div>
