import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4auwox6b.css';
import '../../css/g/g4kv2-c0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4auwox6b"/><path class="g4kv2-c0c"/></g>`,
		"fallback": "reicon:whisk-duotone",
	});
}

export default Component;
