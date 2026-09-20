import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubfgqsalz.css';

const viewBox = {"width":400,"height":193.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubfgqsalz"/>`,
		"fallback": "thesvg-color:zte",
	});
}

export default Component;
