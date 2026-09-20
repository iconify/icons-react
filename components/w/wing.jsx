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
		"content": `<style>.d25tfab3y {
  fill: var(--svg-color--fff, #fff);
  d: path("m14.773 9.917l-1.565 2.813l-1.565 2.815l-1.567 2.808L8.51 15.54l1.565-2.814l1.567-2.812l-2.377-4.268h3.13l.813 1.457zm-8.64-4.27H3l3.943 7.081L8.51 9.917zm13.302 1.457l-.812-1.457h-3.131l2.378 4.27l-1.568 2.813l-1.564 2.815l1.564 2.808l1.567-2.812l1.566-2.814L21 9.915z");
}
</style><path class="d25tfab3y"/>`,
		"fallback": "token-branded:wing",
	});
}

export default Component;
