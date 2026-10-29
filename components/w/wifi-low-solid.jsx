import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axaf_tbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axaf_tbrf"/>`,
		"fallback": "withicons:wifi-low-solid",
	});
}

export default Component;
