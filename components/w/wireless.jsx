import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0b9abac.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa0b9abac"/>`,
		"fallback": "dinkie-icons:wireless",
	});
}

export default Component;
