import { FAMILY_BRANCHES, CAREER, EDUCATION } from '$env/static/private';

export const load = () => {
	return {
		branches: JSON.parse(FAMILY_BRANCHES),
		jobs: JSON.parse(CAREER),
		education: JSON.parse(EDUCATION)
	};
};
