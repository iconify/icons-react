import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.krfuj-b3p {
  fill: var(--svg-color--005741, #005741);
  d: path("M16.958 15.917v2.393H7.086c.137-1.575.645-2.683 2.402-4.241l7.47-6.373v5.592h2.69V3H4.355v5.128h2.688V5.69h8.123l-7.433 6.343l-.018.017c-3.115 2.758-3.363 4.984-3.363 7.607V21h15.293v-5.082h-2.689z");
}
</style><path class="krfuj-b3p"/>`,
		"fallback": "token-branded:zeta-chain",
	});
}

export default Component;
