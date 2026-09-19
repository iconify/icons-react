import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq8waybzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq8waybzs"/>`,
		"fallback": "cbi:zigbee2mqtt",
	});
}

export default Component;
