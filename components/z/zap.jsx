import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fe81bxboj.css';
import '../../css/l/l9fffcyzq.css';
import '../../css/x/x4u6-vbfr.css';
import '../../css/j/jzz3tzdzi.css';
import '../../css/v/vt74oiggv.css';
import '../../css/o/oxdchzbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fe81bxboj wm-shadow"/><path class="l9fffcyzq"/><path class="x4u6-vbfr"/><path class="jzz3tzdzi"/><path class="vt74oiggv wm-shine"/><path class="oxdchzbuj wm-deco"/></g>`,
		"fallback": "withicons-sticker:zap",
	});
}

export default Component;
