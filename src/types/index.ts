export interface InfoPointInterface {
	discriminator: 'InfoPointInterface';
	label: string;
	value: string;
	addInfo?: string;
}

export interface RelativeInterface {
	discriminator: 'RelativeInterface';
	name: string;
	relation: string;
	occupation: string;
	spouse?: string;
}

export interface RelativeBranchInterface {
	discriminator: 'RelativeBranchInterface';
	branch: 'Paternal' | 'Maternal';
	relatives: RelativeInterface[];
}

export interface DateRangeInterface {
	discriminator: 'DateRangeInterface';
	month: string;
	year: number | string;
}

export interface JobInterface {
	discriminator: 'JobInterface';
	position: string;
	company: string;
	start: DateRangeInterface;
	end?: DateRangeInterface;
}

export interface EducationInterface {
	discriminator: 'EducationInterface';
	title: string;
	institution: string;
	from: DateRangeInterface;
	end?: DateRangeInterface;
}
