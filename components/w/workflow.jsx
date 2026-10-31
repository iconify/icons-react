import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v8atibp5v.css';
import '../../css/y/yfcmbwbvg.css';
import '../../css/u/uq6pq445a.css';
import '../../css/y/yrgiqhxka.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v8atibp5v"/><path class="wm-shine yfcmbwbvg"/><path class="uq6pq445a wm-k"/><path class="wm-a yrgiqhxka"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:workflow",
	});
}

export default Component;
