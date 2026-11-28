import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1_6-jkgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary z1_6-jkgp"/>`,
		"fallback": "iconaut:wifi-low-duotone",
	});
}

export default Component;
