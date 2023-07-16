export interface InfoPointInterface {
	label: string;
	value: string;
	addInfo: string;
}

export interface RelativeInterface {
	name: string;
	relation: string;
	occupation: string;
	spouse?: string;
}

export interface RelativeBranchInterface {
	branch: 'Paternal' | 'Maternal';
	relatives: RelativeInterface[];
}
