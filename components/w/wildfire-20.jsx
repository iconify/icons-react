import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8uy6ybjb.css';
import '../../css/b/bx-b5ccfa.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8uy6ybjb"/><path class="bx-b5ccfa"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:wildfire-20",
	});
}

export default Component;
