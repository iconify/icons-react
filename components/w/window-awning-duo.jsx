import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnw_9vb8e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-zmabc9e.css';
import '../../css/i/ib51isosu.css';
import '../../css/y/yqu__acba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnw_9vb8e secondary"/><g class="dt0cm9dhy primary"><path class="q-zmabc9e"/><path class="ib51isosu"/><path class="yqu__acba"/></g>`,
		"fallback": "iconaut:window-awning-duo",
	});
}

export default Component;
