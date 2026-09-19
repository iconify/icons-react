import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzf0y6bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzf0y6bmv"/>`,
		"fallback": "cbi:webmin",
	});
}

export default Component;
