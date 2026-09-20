import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j876dm5-v.css';
import '../../css/p/p3g2vwe8s.css';
import '../../css/m/mzaany7vl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j876dm5-v"/><path class="p3g2vwe8s"/><path class="mzaany7vl"/></g>`,
		"fallback": "streamline-flex-color:webcam-video-off",
	});
}

export default Component;
