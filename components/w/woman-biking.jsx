import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9b01cczl.css';
import '../../css/g/g-hkusb1e.css';
import '../../css/q/q8zi9ob1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i9b01cczl"/><path class="g-hkusb1e"/><path class="q8zi9ob1b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-biking",
	});
}

export default Component;
