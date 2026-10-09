import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ist7qnbhr.css';
import '../../css/v/vhdemacnv.css';
import '../../css/o/o1-sdirwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ist7qnbhr"/><path class="vhdemacnv"/><path class="o1-sdirwp"/>`,
		"fallback": "energy-icons:windmill-20-bold",
	});
}

export default Component;
