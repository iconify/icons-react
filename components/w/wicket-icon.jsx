import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g2onl3bfh {
  fill: var(--svg-color--fff, #fff);
  d: path("M79.988 79.99v96.024h96.024V79.99l-32.01 64.013l-16.004-32.006l-16 32.006z");
}

.wu_b4thgo {
  fill: var(--svg-color--ff9925, #ff9925);
  d: path("M127.998 0C198.694 0 256 57.306 256 127.998c0 70.696-57.306 128.005-128.002 128.005C57.306 256.003 0 198.693 0 127.998C0 57.306 57.306 0 127.998 0");
}
</style><path class="wu_b4thgo"/><path class="g2onl3bfh"/>`,
		"fallback": "logos:wicket-icon",
	});
}

export default Component;
