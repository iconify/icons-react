import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyus6l67b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyus6l67b"/>`,
		"fallback": "picon:yahoo",
	});
}

export default Component;
