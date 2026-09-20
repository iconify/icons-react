import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw4lg9bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw4lg9bbc"/>`,
		"fallback": "simple-icons:westerndigital",
	});
}

export default Component;
