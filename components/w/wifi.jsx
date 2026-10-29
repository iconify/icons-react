import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cvygwcb1l.css';
import '../../css/a/a5ognjdal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cvygwcb1l"/><path class="a5ognjdal"/></g>`,
		"fallback": "withicons:wifi",
	});
}

export default Component;
