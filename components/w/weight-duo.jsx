import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/djs-1ddrm.css';
import '../../css/j/jfru2eb2v.css';
import '../../css/i/izb9cccdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="djs-1ddrm"/><path class="jfru2eb2v wm-a"/><path class="izb9cccdy"/></g>`,
		"fallback": "withicons:weight-duo",
	});
}

export default Component;
