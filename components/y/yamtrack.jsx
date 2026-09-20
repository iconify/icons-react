import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9oa8dbac.css';
import '../../css/g/gc5xy5own.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="f9oa8dbac"/><path class="gc5xy5own"/>`,
		"fallback": "selfhst:yamtrack",
	});
}

export default Component;
