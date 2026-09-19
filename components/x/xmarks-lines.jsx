import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2fc638uz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2fc638uz"/>`,
		"fallback": "fa7-solid:xmarks-lines",
	});
}

export default Component;
