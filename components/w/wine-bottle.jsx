import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_89rtb6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_89rtb6l"/>`,
		"fallback": "la:wine-bottle",
	});
}

export default Component;
