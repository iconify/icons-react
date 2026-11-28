import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg6mp7bmo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p2yv41ddi.css';
import '../../css/s/stmbfjbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg6mp7bmo secondary"/><g class="dt0cm9dhy primary"><path class="p2yv41ddi"/><path class="stmbfjbtn"/></g>`,
		"fallback": "iconaut:whatsapp-duo",
	});
}

export default Component;
