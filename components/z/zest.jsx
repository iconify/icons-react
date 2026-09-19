import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-kg5ifn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va-kg5ifn"/>`,
		"fallback": "cryptocurrency:zest",
	});
}

export default Component;
