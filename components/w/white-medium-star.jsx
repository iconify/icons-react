import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h4gt3jbaf {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z");
}
</style><path class="h4gt3jbaf"/>`,
		"fallback": "emojione:white-medium-star",
	});
}

export default Component;
