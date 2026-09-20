import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5tdg8tgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5tdg8tgk"/>`,
		"fallback": "selfhst:zigbee2mqtt-light",
	});
}

export default Component;
