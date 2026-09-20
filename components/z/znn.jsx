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
		"content": `<style>.c-mxhbbkg {
  fill: var(--svg-color--00ff65, #00ff65);
  fill-rule: evenodd;
  d: path("M6.375 3h11.25v2.16l-6.868 4.59h6.868V21h-2.036l-6.964-5.962V21h-2.25V9.682l7.037-4.432H6.375zm2.25 9h6.75v5.625z");
}
</style><path clip-rule="evenodd" class="c-mxhbbkg"/>`,
		"fallback": "token-branded:znn",
	});
}

export default Component;
