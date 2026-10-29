import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu6-mip-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu6-mip-d"/>`,
		"fallback": "withicons:wrench",
	});
}

export default Component;
