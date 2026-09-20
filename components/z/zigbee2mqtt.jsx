import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt-jrsb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt-jrsb1y"/>`,
		"fallback": "thesvg-color:zigbee2mqtt",
	});
}

export default Component;
