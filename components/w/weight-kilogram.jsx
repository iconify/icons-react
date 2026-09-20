import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_nfbb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_nfbb-h"/>`,
		"fallback": "mdi:weight-kilogram",
	});
}

export default Component;
