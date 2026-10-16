import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc1i690il.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc1i690il"/>`,
		"fallback": "energy-icons:wood-pellets-48-bold",
	});
}

export default Component;
