import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yw4ewdbig.css';
import '../../css/r/rgjubxbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yw4ewdbig"/><path class="rgjubxbat"/></g>`,
		"fallback": "si:webcam-duotone",
	});
}

export default Component;
