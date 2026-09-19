import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8gv4p9ia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8gv4p9ia"/>`,
		"fallback": "fluent-emoji-high-contrast:wilted-flower",
	});
}

export default Component;
