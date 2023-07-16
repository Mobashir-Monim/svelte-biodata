<script lang="ts">
	import type { DateRangeInterface } from '../types';

	export let start: DateRangeInterface;
	export let end: DateRangeInterface | undefined = undefined;
	export let classes: string = '';
	let endContent: string = end ? `${end.month} ${end.year}` : 'Present';
</script>

<span class={`${classes} flex flex-row gap-1 text-[0.7rem] justify-end`}>
	<span>{start.month} {start.year}</span>-<span>{endContent}</span>
</span>
