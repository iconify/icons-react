import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w951mibfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w951mibfi"/>`,
		"fallback": "lucide:zodiac-libra",
	});
}

export default Component;
