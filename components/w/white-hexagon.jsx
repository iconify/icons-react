import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0nrgzb4b.css';
import '../../css/j/j4wwoicdj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0nrgzb4b"/><path class="j4wwoicdj"/>`,
		"fallback": "openmoji:white-hexagon",
	});
}

export default Component;
