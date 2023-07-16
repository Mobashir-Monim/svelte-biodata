<script lang="ts">
	import InfoBlock from '../components/InfoBlock.svelte';
	import RelativesBlock from '../components/RelativesBlock.svelte';
	import type { RelativeBranchInterface, JobInterface, EducationInterface } from '../types';

	export let data;
	let branches: RelativeBranchInterface[] = data.branches;
	let jobs: JobInterface[] = data.jobs;
	let education: EducationInterface[] = data.education;
</script>

<div class="flex md:flex-row gap-5 break-after-page">
	<InfoBlock points={jobs} header="Career" />
	<InfoBlock points={education} header="Education" />
</div>

<div class="flex md:flex-row gap-5">
	{#each branches as branch}
		<RelativesBlock branch={branch.branch} relatives={branch.relatives} />
	{/each}
</div>
