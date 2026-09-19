import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3yhi6rbc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3yhi6rbc"/>`,
		"fallback": "fa7-regular:window-close",
	});
}

export default Component;
