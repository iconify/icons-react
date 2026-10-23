import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmlu0wb_n.css';
import '../../css/o/o_sn98buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmlu0wb_n"/><path class="o_sn98buj"/></g>`,
		"fallback": "vadivam:zodiac-taurus",
	});
}

export default Component;
