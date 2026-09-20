import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouph7acda.css';
import '../../css/h/hz1o6wbyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouph7acda"/><path class="hz1o6wbyo"/></g>`,
		"fallback": "material-icon-theme:windicss",
	});
}

export default Component;
