import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6agol35u.css';
import '../../css/p/pd8yij20i.css';
import '../../css/x/xrgtxcs3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6agol35u"/><path class="pd8yij20i"/><path clip-rule="evenodd" class="xrgtxcs3w"/>`,
		"fallback": "solar:window-frame-bold",
	});
}

export default Component;
