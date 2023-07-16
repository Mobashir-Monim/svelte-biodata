import {
	FAMILY_BRANCHES,
	CAREER,
	EDUCATION,
	PERSONAL_INFO,
	FAMILY,
	ADDRESSES
} from '$env/static/private';

export const load = () => {
	return {
		branches: JSON.parse(FAMILY_BRANCHES),
		jobs: JSON.parse(CAREER),
		education: JSON.parse(EDUCATION),
		personalInfo: JSON.parse(PERSONAL_INFO),
		family: JSON.parse(FAMILY),
		addresses: JSON.parse(ADDRESSES)
	};
};
