import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9eziwahb.css';
import '../../css/u/uhyb91t7h.css';
import '../../css/w/wiqgcx4jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o9eziwahb"/><path class="uhyb91t7h"/><path class="wiqgcx4jl"/></g>`,
		"fallback": "solar:wind-linear",
	});
}

export default Component;
