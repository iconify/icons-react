import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl7yv0b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl7yv0b1t"/>`,
		"fallback": "selfhst:workbrew-dark",
	});
}

export default Component;
