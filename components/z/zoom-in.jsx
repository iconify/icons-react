import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/g/gz-i7twts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="olgj5xbvl"/><path class="gz-i7twts wm-a"/></g>`,
		"fallback": "withicons:zoom-in",
	});
}

export default Component;
