import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztntisbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztntisbwn"/>`,
		"fallback": "streamline-ultimate:yoga-back-stretch-1",
	});
}

export default Component;
