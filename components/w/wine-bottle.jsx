import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj1idbb1c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj1idbb1c"/>`,
		"fallback": "fa7-solid:wine-bottle",
	});
}

export default Component;
