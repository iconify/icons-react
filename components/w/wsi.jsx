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
		"content": `<style>.ddn5-g9lc {
  fill: var(--svg-color--013662, #013662);
  d: path("M10.5 3H9v7l1.5-3.99zM7.465 6.5H4.5l3.4 11h2.515l1.565-5.13l1.605 5.13H16.1l3.4-11h-2.905l-1.77 5.48l-1.71-5.48h-2.23l-1.77 5.48zM15 3h-1.5v3.01L15 10zM9 18h1.5v3H9zm6 0h-1.5v3H15z");
}
</style><path class="ddn5-g9lc"/>`,
		"fallback": "token-branded:wsi",
	});
}

export default Component;
