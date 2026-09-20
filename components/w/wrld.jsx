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
		"content": `<style>.my-4qsbke {
  fill: var(--svg-color--03f, #03f);
  d: path("m12 6.315l-9 3.79v3.79l9 3.789l9-3.79v-3.79zm0 1.421l7.579 3.16L12 14.368l-7.579-3.472z");
}
</style><path class="my-4qsbke"/>`,
		"fallback": "token-branded:wrld",
	});
}

export default Component;
