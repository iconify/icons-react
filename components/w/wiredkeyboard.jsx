import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiyaiv4lr.css';
import '../../css/t/tum1zw32k.css';
import '../../css/e/ech26lbaz.css';
import '../../css/p/pi4tf0brq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiyaiv4lr"/><path class="tum1zw32k"/><path class="ech26lbaz"/><path class="pi4tf0brq"/>`,
		"fallback": "fxemoji:wiredkeyboard",
	});
}

export default Component;
