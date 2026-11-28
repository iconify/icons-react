import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3skl530n.css';
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
		"content": `<path class="j3skl530n secondary"/><g class="dt0cm9dhy primary"><path class="sbm9b5tlm"/><path class="k7ctk0cpn"/><path class="i5obohb9e"/></g>`,
		"fallback": "iconaut:whistle-duo",
	});
}

export default Component;
