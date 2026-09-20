import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wsvq0zbnl.css';
import '../../css/b/b3vy92-9d.css';
import '../../css/r/rkz625whc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wsvq0zbnl"/><path class="b3vy92-9d"/><path class="rkz625whc"/></g>`,
		"fallback": "streamline-flex:windmill",
	});
}

export default Component;
