import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tae4rbc7m.css';
import '../../css/m/mpxziygee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tae4rbc7m"/><path class="mpxziygee"/></g>`,
		"fallback": "vadivam:wifi",
	});
}

export default Component;
