import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jfmzhjz.css';
import '../../css/x/xvfmjobgc.css';
import '../../css/m/mr9w70b2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8jfmzhjz"/><path clip-rule="evenodd" class="xvfmjobgc"/><path class="mr9w70b2y"/></g>`,
		"fallback": "streamline-kameleon-color:wind-wheel-duo",
	});
}

export default Component;
