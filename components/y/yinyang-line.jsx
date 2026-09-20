import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvzj0b48k.css';
import '../../css/x/xg6ua4r-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvzj0b48k"/><path class="xg6ua4r-y"/>`,
		"fallback": "mingcute:yinyang-line",
	});
}

export default Component;
