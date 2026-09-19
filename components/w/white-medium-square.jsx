import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw-5fmbdy.css';
import '../../css/o/owpkajbwg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sw-5fmbdy"/><path class="owpkajbwg"/></g>`,
		"fallback": "fluent-emoji-flat:white-medium-square",
	});
}

export default Component;
