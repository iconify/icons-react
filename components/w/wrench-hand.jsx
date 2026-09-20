import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vin7gftgd.css';
import '../../css/w/wvsvorbgl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vin7gftgd"/><path class="wvsvorbgl"/></g>`,
		"fallback": "streamline-flex:wrench-hand",
	});
}

export default Component;
