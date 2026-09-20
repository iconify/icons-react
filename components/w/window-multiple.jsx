import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/an-ms5bht.css';
import '../../css/e/e3m3rbb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="an-ms5bht"/><path class="e3m3rbb2p"/></g>`,
		"fallback": "proicons:window-multiple",
	});
}

export default Component;
