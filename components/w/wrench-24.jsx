import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_u9ihbjp.css';
import '../../css/y/yn96a3qrz.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGkOB4edxL)" class="j_u9ihbjp"/><defs><linearGradient id="SVGkOB4edxL" x1="10.128" x2="13.694" y1="3.249" y2="22.707" gradientUnits="userSpaceOnUse"><stop class="yn96a3qrz"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:wrench-24",
	});
}

export default Component;
