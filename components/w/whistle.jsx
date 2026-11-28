import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sbm9b5tlm.css';
import '../../css/k/k7ctk0cpn.css';
import '../../css/i/i5obohb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sbm9b5tlm"/><path class="k7ctk0cpn"/><path class="i5obohb9e"/></g>`,
		"fallback": "iconaut:whistle",
	});
}

export default Component;
