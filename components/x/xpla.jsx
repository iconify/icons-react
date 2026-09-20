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
		"content": `<style>.pbv36tbqm {
  fill: var(--svg-color--00b1ff, #00b1ff);
  d: path("m14.052 13.02l-1.014 1.008l6.948 6.954L21 19.968l-6.948-6.954zM4.008 3L3 4.014l6.948 6.948l1.008-1.008zm15.966.012l-6.936 6.96l1.008 1.008l6.942-6.96zM9.966 13.032l-6.942 6.96L4.032 21l6.948-6.96z");
}
</style><path class="pbv36tbqm"/>`,
		"fallback": "token-branded:xpla",
	});
}

export default Component;
