/**
 * Types for section content. Built from docs/CONTENT.en.md by scripts/build-content.js.
 * Convention: <!-- id: xxx --> then # block, ## cards, --- footer.
 */

export type CardSection = {
	intro?: string | null;
	cards: Array<{ title: string; html: string }>;
	/** Content after --- in md: block footer (e.g. closing line). */
	footer?: string | null;
};

export type ContactSection = {
	intro?: string | null;
	contactLinks: Array<{ label: string; href: string; icon?: string }>;
};

export type AsideBlock = { type: 'aside'; id: string; trigger: string; body: string };
export type HtmlBlock = { type: 'html'; content: string };
export type ContentBlock = HtmlBlock | AsideBlock;

export type BlockSection = {
	blocks: ContentBlock[];
};

export type Sections = Record<string, string | CardSection | ContactSection | BlockSection>;

export type SectionOrder = string[];

/** Options from <!-- id: xxx; cards: row|column -->. Class section--<id> is automatic. */
export type SectionOptions = Record<string, { cards?: string }>;
