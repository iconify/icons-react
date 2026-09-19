import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8j3y9bdo.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8j3y9bdo"/>`,
		"fallback": "fontisto:webpack",
	});
}

export default Component;
