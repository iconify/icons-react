import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd5bjjydz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd5bjjydz"/>`,
		"fallback": "dinkie-icons:window-browser",
	});
}

export default Component;
