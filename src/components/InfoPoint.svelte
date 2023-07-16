<script lang="ts">
	import type { InfoPointInterface } from '../types/index';
	export let point: InfoPointInterface;
	export let classes: string = '';
</script>

<div class="flex flex-col gap-0 w-full max-w-[320px] mx-auto">
	<span class="border-b font-semibold flex flex-row justify-between">
		<span>{point.value}</span>
	</span>
	<span class="text-[0.9rem] text-right ml-auto">{point.label}</span>
</div>
