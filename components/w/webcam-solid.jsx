import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cgzptta5k.css';
import '../../css/l/ltmxevbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cgzptta5k"/><path class="ltmxevbkh wm-a"/></g>`,
		"fallback": "withicons:webcam-solid",
	});
}

export default Component;
