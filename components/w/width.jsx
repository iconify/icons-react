import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzatv2dyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzatv2dyb"/>`,
		"fallback": "akar-icons:width",
	});
}

export default Component;
