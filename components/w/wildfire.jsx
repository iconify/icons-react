import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tlglmhb4u.css';
import '../../css/b/b8mpirbns.css';
import '../../css/f/f0ywp_bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tlglmhb4u"/><path class="b8mpirbns"/><path class="f0ywp_bze"/></g>`,
		"fallback": "iconaut:wildfire",
	});
}

export default Component;
