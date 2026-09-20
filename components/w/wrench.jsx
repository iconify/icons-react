import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bay2g0ldj.css';
import '../../css/m/mdo6_0bci.css';
import '../../css/i/ivqc4-ttx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bay2g0ldj"/><path class="mdo6_0bci"/><path class="ivqc4-ttx"/></g>`,
		"fallback": "streamline-cyber-color:wrench",
	});
}

export default Component;
