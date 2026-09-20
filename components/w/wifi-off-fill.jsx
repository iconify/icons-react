import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjmr10bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjmr10bvn"/>`,
		"fallback": "ri:wifi-off-fill",
	});
}

export default Component;
