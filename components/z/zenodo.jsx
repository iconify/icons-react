import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kagb8yi_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="colorfff kagb8yi_r svgShape"/>`,
		"fallback": "academicons:zenodo",
	});
}

export default Component;
