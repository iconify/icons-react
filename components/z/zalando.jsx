import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a82_lyb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a82_lyb_a"/>`,
		"fallback": "thesvg-color:zalando",
	});
}

export default Component;
