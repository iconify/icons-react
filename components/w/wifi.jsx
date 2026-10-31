import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y69k5ehrx.css';
import '../../css/s/sxhx-0pdi.css';
import '../../css/x/xowm3_b4x.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y69k5ehrx"/><path class="sxhx-0pdi"/><path class="xowm3_b4x"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wifi",
	});
}

export default Component;
