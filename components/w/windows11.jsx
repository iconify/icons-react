import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og6b60d7q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og6b60d7q"/>`,
		"fallback": "thesvg-color:windows11",
	});
}

export default Component;
