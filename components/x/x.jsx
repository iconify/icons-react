import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsulv59-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsulv59-a"/>`,
		"fallback": "boxicons:x",
	});
}

export default Component;
