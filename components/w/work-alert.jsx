import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oofs749fw.css';
import '../../css/j/jafxdgddr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oofs749fw"/><path class="jafxdgddr"/></g>`,
		"fallback": "hugeicons:work-alert",
	});
}

export default Component;
