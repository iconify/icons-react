import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7yxhnbbp.css';
import '../../css/y/yn96a3qrz.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGpbj7dbCJ)" class="m7yxhnbbp"/><defs><linearGradient id="SVGpbj7dbCJ" x1="8.5" x2="11.356" y1="3" y2="18.576" gradientUnits="userSpaceOnUse"><stop class="yn96a3qrz"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:wrench-20",
	});
}

export default Component;
