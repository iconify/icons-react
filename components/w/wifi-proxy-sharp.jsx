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
		"content": `<style>.ifbilv2xt {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.99-.268q-.51-.09-1.03-.09q-2.42 0-4.122 1.703q-1.702 1.701-1.702 4.123q0 .52.089 1.03q.09.51.268.989zm3.923-.058v-6.192h3.539v2.654h2.654v3.538zm.885-3.538h1.769v-1.77h-1.77zm0 2.654h1.769v-1.77h-1.77zm2.653 0h1.77v-1.77h-1.77z");
}
</style><path class="ifbilv2xt"/>`,
		"fallback": "material-symbols-light:wifi-proxy-sharp",
	});
}

export default Component;
