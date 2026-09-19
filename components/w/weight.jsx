import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sh109qbsn.css';
import '../../css/p/plqbuub9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sh109qbsn"/><path class="plqbuub9g"/></g>`,
		"fallback": "iconoir:weight",
	});
}

export default Component;
