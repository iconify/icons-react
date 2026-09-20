import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1uro2jdl.css';
import '../../css/a/asrd5jyzg.css';
import '../../css/g/g1s4qk6lm.css';
import '../../css/b/bx_osxbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1uro2jdl"/><path class="asrd5jyzg"/><path class="g1s4qk6lm"/><path class="bx_osxbct"/></g>`,
		"fallback": "streamline-cyber-color:wine-bottle-glass",
	});
}

export default Component;
