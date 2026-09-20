import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5tyarwmb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5tyarwmb"/>`,
		"fallback": "memory:weight",
	});
}

export default Component;
