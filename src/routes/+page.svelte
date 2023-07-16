<script lang="ts">
	import RelativesBlock from '../components/RelativesBlock.svelte';
	import type { RelativeBranchInterface } from '../types';

	export let data;
	let branches: RelativeBranchInterface[] = JSON.parse(data.branches);

	let infoPoints = [
		{
			header: 'Career',
			jobs: [
				{
					position: '',
					company: '',
					isCurrent: true,
					starting: {
						month: '',
						year: ''
					},
					ending: {
						month: '',
						year: ''
					}
				}
			]
		}
	];
</script>

<div class="flex flex-row gap-5">
	{#each branches as branch}
		<RelativesBlock branch={branch.branch} relatives={branch.relatives} />
	{/each}
</div>
