import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtoloabkm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtoloabkm"/>`,
		"fallback": "devicon-plain:xd",
	});
}

export default Component;
