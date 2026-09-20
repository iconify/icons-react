import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7t5hzqcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7t5hzqcu"/>`,
		"fallback": "selfhst:weblate-dark",
	});
}

export default Component;
