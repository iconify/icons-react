import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgu11uvkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgu11uvkx"/>`,
		"fallback": "thesvg:xuanyuan",
	});
}

export default Component;
