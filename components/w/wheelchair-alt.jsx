import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5vato6fd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5vato6fd"/>`,
		"fallback": "fa7-solid:wheelchair-alt",
	});
}

export default Component;
