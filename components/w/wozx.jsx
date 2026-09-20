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
		"content": `<style>.edq6gnb1u {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("m14.836 10.313l2.836-1.125L12 5.813L6.706 9.188v5.625L12 17.625l5.672-2.813l-3.025-1.124l-2.64 1.308l-.007.005l-2.643-1.498l-.004-.003L12 12l-2.647-1.5l.006-.004L12 9l.013.007zM12 3l7.941 4.5v9l-7.94 4.5l-7.942-4.5v-9l.01-.005z");
}
</style><path clip-rule="evenodd" class="edq6gnb1u"/>`,
		"fallback": "token-branded:wozx",
	});
}

export default Component;
