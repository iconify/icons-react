import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ozjkdu0on.css';
import '../../css/g/gd0naobgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ozjkdu0on"/><path class="gd0naobgk wm-a"/></g>`,
		"fallback": "withicons:webcam",
	});
}

export default Component;
