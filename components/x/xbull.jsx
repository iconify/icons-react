import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m15x6e6na.css';
import '../../css/k/knxlbdceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m15x6e6na"/><path class="knxlbdceq"/>`,
		"fallback": "token:xbull",
	});
}

export default Component;
