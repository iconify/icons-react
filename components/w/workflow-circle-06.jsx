import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yj6erolzt.css';
import '../../css/e/ekvcz84ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yj6erolzt"/><path class="ekvcz84ht"/></g>`,
		"fallback": "hugeicons:workflow-circle-06",
	});
}

export default Component;
