import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyjr-7brw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyjr-7brw"/>`,
		"fallback": "qlementine-icons:wireless-0-16",
	});
}

export default Component;
