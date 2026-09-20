import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tae4rbc7m.css';
import '../../css/r/rya3unbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tae4rbc7m"/><path class="rya3unbhw"/></g>`,
		"fallback": "vadivam:wifi-off",
	});
}

export default Component;
