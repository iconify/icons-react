import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4hwwfb8g.css';

const viewBox = {"width":1984,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4hwwfb8g"/>`,
		"fallback": "fa:wifi",
	});
}

export default Component;
