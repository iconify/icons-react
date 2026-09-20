import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odo2x7s2w.css';
import '../../css/q/qeh1rda9f.css';
import '../../css/j/j12wdzb5f.css';
import '../../css/n/nowz9vacl.css';
import '../../css/h/h-3wj0b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="odo2x7s2w"/><path class="qeh1rda9f"/><path class="j12wdzb5f"/><path class="nowz9vacl"/><path clip-rule="evenodd" class="h-3wj0b9y"/></g>`,
		"fallback": "solar:wi-fi-router-minimalistic-outline",
	});
}

export default Component;
