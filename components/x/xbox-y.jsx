import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3eawi-5j.css';
import '../../css/h/hhkijobnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q3eawi-5j"/><path class="hhkijobnc"/></g>`,
		"fallback": "iconoir:xbox-y",
	});
}

export default Component;
