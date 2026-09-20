import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmsp9pbwd.css';
import '../../css/v/v2u8oco0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xmsp9pbwd"/><path class="v2u8oco0u"/></g>`,
		"fallback": "streamline-color:webcam-video-off",
	});
}

export default Component;
