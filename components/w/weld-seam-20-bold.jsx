import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/escqflblo.css';
import '../../css/o/otychb1vp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="escqflblo"/><path class="otychb1vp"/>`,
		"fallback": "energy-icons:weld-seam-20-bold",
	});
}

export default Component;
