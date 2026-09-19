import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1cmdq6lf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1cmdq6lf"/>`,
		"fallback": "file-icons:zilog",
	});
}

export default Component;
