import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unpd6qfsp.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unpd6qfsp"/>`,
		"fallback": "fa6-solid:wine-glass",
	});
}

export default Component;
