import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg2qbgkzh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg2qbgkzh"/>`,
		"fallback": "cib:y-combinator",
	});
}

export default Component;
