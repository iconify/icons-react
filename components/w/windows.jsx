import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u15iko0yu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u15iko0yu"/>`,
		"fallback": "dinkie-icons:windows",
	});
}

export default Component;
