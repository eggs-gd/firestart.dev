export const SITE = 'https://firestart.dev';
export const SITE_NAME = 'Firestarter';
export const OG_IMAGE = `${SITE}/og.jpg`;

export const HOME_TITLE = 'Firestarter — restoring momentum in complex systems';
export const HOME_DESCRIPTION =
	'I step into complex projects when execution stops moving — or earlier, before it does. Identify the real constraint and restore momentum.';

export const jsonLdHome = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			name: SITE_NAME,
			url: `${SITE}/`,
			description: HOME_DESCRIPTION
		},
		{
			'@type': 'Person',
			name: 'Oleksandr B.',
			url: `${SITE}/`,
			jobTitle: 'Engineering leader / system architect',
			sameAs: ['https://linkedin.com/in/dukobpa3', 'https://t.me/Dukobpa3'],
			worksFor: { '@type': 'Organization', name: SITE_NAME }
		}
	]
};
