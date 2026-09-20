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
		"content": `<style>.g3737mb-h {
  fill: var(--svg-color--ba9f33, #ba9f33);
  fill-rule: evenodd;
  d: path("M5.25 3h8.535c2.158.03 6.508 1.809 6.65 8.693c.14 6.884-4.375 9.073-6.65 9.307H5.25v-7.875H3.563v-2.812H5.25zm2.812 2.812h4.594c1.646.02 4.944 1.227 4.969 5.906c.03 5.538-3.313 6.47-4.97 6.47H8.063v-5.063h5.063v-2.812H8.062z");
}
</style><path clip-rule="evenodd" class="g3737mb-h"/>`,
		"fallback": "token-branded:xdg",
	});
}

export default Component;
