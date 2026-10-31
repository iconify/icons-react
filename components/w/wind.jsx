import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u-97-5btw.css';
import '../../css/o/o8xnh3b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u-97-5btw"/><path class="o8xnh3b5q"/></g>`,
		"fallback": "withicons-retro:wind",
	});
}

export default Component;
