import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-zmabc9e.css';
import '../../css/i/ib51isosu.css';
import '../../css/x/xqxdkfbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q-zmabc9e"/><path class="ib51isosu"/><path class="xqxdkfbvz"/></g>`,
		"fallback": "iconaut:window-awning-open",
	});
}

export default Component;
