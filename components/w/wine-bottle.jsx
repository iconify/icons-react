import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1rwt2vuq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1rwt2vuq"/>`,
		"fallback": "fa6-solid:wine-bottle",
	});
}

export default Component;
