<script lang="ts">
	import type { InfoPointInterface } from '../types/index';
	export let point: InfoPointInterface;
</script>

<div class="flex flex-col gap-0 w-full">
	<span class="border-b">{point.value}</span>
	<span class="text-[0.9rem] ml-auto">{point.label}</span>
</div>
