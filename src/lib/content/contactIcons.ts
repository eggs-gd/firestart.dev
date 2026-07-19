import { mdiEmail, mdiLinkedin, mdiInstagram, mdiSend, mdiServerNetwork } from '@mdi/js';

/** MDI icon name (from CONTENT <!-- links -->) -> SVG path. Telegram uses mdiSend (paper plane). */
export const contactIconPaths: Record<string, string> = {
	email: mdiEmail,
	linkedin: mdiLinkedin,
	instagram: mdiInstagram,
	telegram: mdiSend,
	lab: mdiServerNetwork
};

export function getContactIconPath(name: string | null | undefined): string | undefined {
	if (!name) return undefined;
	const key = name.toLowerCase().trim();
	return contactIconPaths[key];
}
