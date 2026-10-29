import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/emg2ix7fk.css';
import '../../css/r/r9fmh98rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="emg2ix7fk"/><path class="r9fmh98rg wm-s"/></g>`,
		"fallback": "withicons:witch-hat-solid",
	});
}

export default Component;
