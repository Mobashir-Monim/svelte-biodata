import { FAMILY_BRANCHES, CAREER, EDUCATION, PERSONAL_INFO, FAMILY } from '$env/static/private';

export const load = () => {
	return {
		branches: JSON.parse(FAMILY_BRANCHES),
		jobs: JSON.parse(CAREER),
		education: JSON.parse(EDUCATION),
		personalInfo: JSON.parse(PERSONAL_INFO),
		family: JSON.parse(FAMILY)
	};
};
