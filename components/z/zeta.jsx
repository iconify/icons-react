import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vew8owk2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vew8owk2u"/>`,
		"fallback": "matita:zeta",
	});
}

export default Component;
