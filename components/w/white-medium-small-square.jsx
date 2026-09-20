import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wycvh4b1h.css';
import '../../css/h/hnh9ojyty.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wycvh4b1h"/><path class="hnh9ojyty"/>`,
		"fallback": "openmoji:white-medium-small-square",
	});
}

export default Component;
