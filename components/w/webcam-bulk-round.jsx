import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0ob9v8as.css';
import '../../css/c/ccg6pqbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0ob9v8as"/><path class="ccg6pqbxo"/></g>`,
		"fallback": "coolicons:webcam-bulk-round",
	});
}

export default Component;
