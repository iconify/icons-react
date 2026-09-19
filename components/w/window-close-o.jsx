import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amb5sjbsf.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amb5sjbsf"/>`,
		"fallback": "fa:window-close-o",
	});
}

export default Component;
