import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/izb9cccdy.css';
import '../../css/j/jfru2eb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="izb9cccdy"/><path class="jfru2eb2v wm-a"/></g>`,
		"fallback": "withicons:weight",
	});
}

export default Component;
