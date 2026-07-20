import contentMarkdown from '../../docs/CONTENT.en.md?raw';
import { parseSections } from '$lib/content/parseSections';
import type { Sections, SectionOrder, SectionOptions } from '$lib/content/loadSections';

export function load(): { sections: Sections; sectionOrder: SectionOrder; sectionOptions: SectionOptions } {
	return parseSections(contentMarkdown);
}
