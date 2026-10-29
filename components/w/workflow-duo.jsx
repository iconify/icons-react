import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qttdqwb0h.css';
import '../../css/y/yrgiqhxka.css';
import '../../css/u/uq6pq445a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qttdqwb0h"/><path class="wm-a yrgiqhxka"/><path class="uq6pq445a"/></g>`,
		"fallback": "withicons:workflow-duo",
	});
}

export default Component;
