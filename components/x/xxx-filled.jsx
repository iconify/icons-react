import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwa4hv6ct.css';
import '../../css/k/kfuxb8b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pwa4hv6ct"/><path class="kfuxb8b-o"/></g>`,
		"fallback": "reicon:xxx-filled",
	});
}

export default Component;
