import generated from '$lib/content/sections.generated.json';
import type { Sections, SectionOrder, SectionOptions } from '$lib/content/loadSections';

export function load(): { sections: Sections; sectionOrder: SectionOrder; sectionOptions: SectionOptions } {
	const { sections, sectionOrder, sectionOptions = {} } = generated as {
		sections: Sections;
		sectionOrder: SectionOrder;
		sectionOptions?: SectionOptions;
	};
	return { sections, sectionOrder, sectionOptions };
}
