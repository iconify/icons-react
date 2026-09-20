import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrn1n11ow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrn1n11ow"/>`,
		"fallback": "selfhst:whatsapp-dark",
	});
}

export default Component;
