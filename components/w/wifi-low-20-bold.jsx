import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltlzg8bzb.css';
import '../../css/f/fqe-2wb1s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltlzg8bzb"/><path class="fqe-2wb1s"/>`,
		"fallback": "energy-icons:wifi-low-20-bold",
	});
}

export default Component;
