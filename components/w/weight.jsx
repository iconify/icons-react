import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylz_-ebvl.css';
import '../../css/u/un66pmdei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ylz_-ebvl"/><path class="un66pmdei"/></g>`,
		"fallback": "vadivam:weight",
	});
}

export default Component;
