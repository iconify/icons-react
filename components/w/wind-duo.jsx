import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u2ii69bww.css';
import '../../css/z/zb3o_mbtu.css';
import '../../css/d/dapmpxbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u2ii69bww"/><path class="zb3o_mbtu"/><path class="dapmpxbfi"/></g>`,
		"fallback": "iconaut:wind-duo",
	});
}

export default Component;
