import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ex5fhlbnn.css';
import '../../css/s/sub5_qh_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ex5fhlbnn"/><path class="sub5_qh_m"/></g>`,
		"fallback": "heroicons:wrench",
	});
}

export default Component;
