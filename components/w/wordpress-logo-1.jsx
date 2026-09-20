import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qgn9_pbni.css';
import '../../css/g/gw65b6i-q.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qgn9_pbni"/><path class="gw65b6i-q"/><path class="j697l3uzc"/></g>`,
		"fallback": "streamline-logos:wordpress-logo-1",
	});
}

export default Component;
