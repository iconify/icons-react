import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/dbwss0bxe.css';
import '../../css/m/mtrh8qv2q.css';
import '../../css/q/qtudwnmhz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="dbwss0bxe"/><path class="mtrh8qv2q"/><path class="qtudwnmhz"/></g>`,
		"fallback": "flag:ws-4x3",
	});
}

export default Component;
