import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s645b7iut.css';
import '../../css/b/bhawjkaml.css';
import '../../css/s/sbi5f-bon.css';
import '../../css/w/w7ich50hh.css';
import '../../css/k/kqygjhuxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s645b7iut wm-shadow"/><path class="bhawjkaml wm-shadow"/><path class="sbi5f-bon"/><path class="w7ich50hh"/><path class="kqygjhuxx"/></g>`,
		"fallback": "withicons-brutal:workflow",
	});
}

export default Component;
