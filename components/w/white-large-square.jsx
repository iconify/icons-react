import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb-pr3vku.css';
import '../../css/u/u8r4mnbnn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb-pr3vku"/><path class="u8r4mnbnn"/>`,
		"fallback": "openmoji:white-large-square",
	});
}

export default Component;
