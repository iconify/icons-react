import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yd38mdbby.css';
import '../../css/y/y_yf2fhyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yd38mdbby"/><path class="y_yf2fhyx"/></g>`,
		"fallback": "proicons:window-multiple-var",
	});
}

export default Component;
