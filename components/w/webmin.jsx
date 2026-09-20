import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8dkubax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8dkubax"/>`,
		"fallback": "thesvg-color:webmin",
	});
}

export default Component;
