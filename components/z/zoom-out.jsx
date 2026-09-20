import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eunpcrb8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eunpcrb8z"/>`,
		"fallback": "zondicons:zoom-out",
	});
}

export default Component;
