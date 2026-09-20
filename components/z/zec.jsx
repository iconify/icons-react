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
		"content": `<style>.aen5bm2vw {
  fill: var(--svg-color--ecb244, #ecb244);
  d: path("M11.19 15.316h5.547v3.316H13.42V21h-2.844v-2.368H7.263v-3.01l5.521-6.938h-5.52V5.368h3.313V3h2.844v2.368h3.316v3.01z");
}
</style><path class="aen5bm2vw"/>`,
		"fallback": "token-branded:zec",
	});
}

export default Component;
