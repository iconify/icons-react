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
		"content": `<style>.ydwd7ibnq {
  fill: var(--svg-color--ff253a, #ff253a);
  fill-rule: evenodd;
  d: path("M15.669 16.716H8.332l2.614-4.53L9.17 9.11L3 19.794h18L12 4.206l-1.777 3.078z");
}
</style><path clip-rule="evenodd" class="ydwd7ibnq"/>`,
		"fallback": "token-branded:xai",
	});
}

export default Component;
