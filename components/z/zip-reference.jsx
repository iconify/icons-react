import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty41ygy9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty41ygy9y"/>`,
		"fallback": "carbon:zip-reference",
	});
}

export default Component;
