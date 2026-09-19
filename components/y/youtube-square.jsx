import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a80mw2isl.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a80mw2isl"/>`,
		"fallback": "fa-brands:youtube-square",
	});
}

export default Component;
