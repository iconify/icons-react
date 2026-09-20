import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od_h8eb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od_h8eb2m"/>`,
		"fallback": "uil:yen-circle",
	});
}

export default Component;
