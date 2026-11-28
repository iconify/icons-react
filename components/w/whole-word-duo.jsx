import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nc6x_8gnc.css';
import '../../css/r/r_82qdbxl.css';
import '../../css/y/ym8-6c8tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nc6x_8gnc"/><path class="r_82qdbxl"/><path class="ym8-6c8tp"/></g>`,
		"fallback": "iconaut:whole-word-duo",
	});
}

export default Component;
