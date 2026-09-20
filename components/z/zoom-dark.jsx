import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e76oj4bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e76oj4bky"/>`,
		"fallback": "selfhst:zoom-dark",
	});
}

export default Component;
