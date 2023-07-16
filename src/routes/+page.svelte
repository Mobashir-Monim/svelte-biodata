<script lang="ts">
	import InfoBlock from '../components/InfoBlock.svelte';
	import RelativesBlock from '../components/RelativesBlock.svelte';
	import type {
		RelativeBranchInterface,
		JobInterface,
		EducationInterface,
		InfoPointInterface,
		RelativeInterface
	} from '../types';

	export let data;
	let branches: RelativeBranchInterface[] = data.branches;
	let jobs: JobInterface[] = data.jobs;
	let education: EducationInterface[] = data.education;
	let personalInfo: InfoPointInterface[] = data.personalInfo;
	let family: RelativeInterface[] = data.family;
</script>

<div class="flex md:flex-row gap-5 mb-16">
	<InfoBlock points={personalInfo} header="Personal Information" />
	<InfoBlock points={family} header="family" />
</div>

<div class="flex md:flex-row gap-5 mb-16">
	<InfoBlock points={jobs} header="Career" />
	<InfoBlock points={education} header="Education" />
</div>

<div class="flex md:flex-row gap-5">
	{#each branches as branch}
		<RelativesBlock branch={branch.branch} relatives={branch.relatives} />
	{/each}
</div>
