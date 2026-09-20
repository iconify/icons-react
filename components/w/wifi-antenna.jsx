import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhofcq2qx.css';
import '../../css/g/gu_fr1c4b.css';
import '../../css/y/y1gh3htae.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zhofcq2qx"/><path class="gu_fr1c4b"/><path class="y1gh3htae"/></g>`,
		"fallback": "streamline-flex-color:wifi-antenna",
	});
}

export default Component;
