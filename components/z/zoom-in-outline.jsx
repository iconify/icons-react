import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-f-t5b3k.css';
import '../../css/j/jn6f5yb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-f-t5b3k"/><path clip-rule="evenodd" class="jn6f5yb2m"/>`,
		"fallback": "basil:zoom-in-outline",
	});
}

export default Component;
