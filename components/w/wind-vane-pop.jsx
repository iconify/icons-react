import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/y/ysgdaubjc.css';
import '../../css/q/qqah2obpu.css';
import '../../css/k/kd5tqnt9d.css';
import '../../css/w/wa1_a_bkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="ysgdaubjc"/><path class="qqah2obpu"/><path class="kd5tqnt9d"/><path class="wa1_a_bkc"/></g>`,
		"fallback": "streamline-kameleon-color:wind-vane-pop",
	});
}

export default Component;
