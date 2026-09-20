import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pptv-33ge.css';
import '../../css/q/q0u_qhnjt.css';
import '../../css/c/c7rl055gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pptv-33ge"/><path class="q0u_qhnjt"/><path class="c7rl055gm"/></g>`,
		"fallback": "streamline-cyber:weight-scale",
	});
}

export default Component;
