import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h92e2tbsy.css';
import '../../css/i/i_nsi3ucm.css';
import '../../css/p/p4-i55byq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h92e2tbsy"/><path class="i_nsi3ucm"/><path class="p4-i55byq"/>`,
		"fallback": "energy-icons:wood-stove-20-bold",
	});
}

export default Component;
