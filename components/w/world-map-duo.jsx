import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae186tapr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j73_tvpuv.css';
import '../../css/q/qn270lbql.css';
import '../../css/e/e-bowmbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae186tapr secondary"/><g class="dt0cm9dhy primary"><path class="j73_tvpuv"/><path class="qn270lbql"/><path class="e-bowmbfd"/></g>`,
		"fallback": "iconaut:world-map-duo",
	});
}

export default Component;
