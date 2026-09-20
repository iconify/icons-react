import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auzh0lpze.css';
import '../../css/t/t-vawzvbg.css';
import '../../css/u/uswr6mkhm.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="auzh0lpze"/><path class="t-vawzvbg"/><path class="uswr6mkhm"/><path class="xjfc-xbtr"/></g>`,
		"fallback": "streamline-color:webcam-video-circle",
	});
}

export default Component;
