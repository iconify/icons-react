import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n7olqbbjh.css';
import '../../css/o/owpe21ujq.css';
import '../../css/q/q24qtebhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n7olqbbjh"/><path class="owpe21ujq"/><path class="q24qtebhc"/></g>`,
		"fallback": "withicons-bauhaus:weight",
	});
}

export default Component;
