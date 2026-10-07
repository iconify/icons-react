import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ri0654i4u.css';
import '../../css/a/a01y9b9pl.css';
import '../../css/b/b7b0tobnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ri0654i4u"/><path class="a01y9b9pl"/><path class="b7b0tobnz"/></g>`,
		"fallback": "iconoir:webp-format",
	});
}

export default Component;
