import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjdw1nwta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjdw1nwta"/>`,
		"fallback": "coolicons:x-fill-round",
	});
}

export default Component;
