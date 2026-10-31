import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i91yb9t8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i91yb9t8w"/>`,
		"fallback": "coolicons:window-close-fill-round",
	});
}

export default Component;
