import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevmlbz-z.css';
import '../../css/s/swaugsbnu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevmlbz-z"/><path class="swaugsbnu"/>`,
		"fallback": "qlementine-icons:wireless-1-16",
	});
}

export default Component;
