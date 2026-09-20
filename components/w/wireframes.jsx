import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k13nuzrqr.css';
import '../../css/y/yxlj6vurs.css';
import '../../css/y/y06lpjbxo.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kzvf59kzj.css';
import '../../css/k/kkgh1qb4r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k13nuzrqr"/><path class="yxlj6vurs"/><path class="y06lpjbxo"/><g class="ij2x_72vy"><path class="kzvf59kzj"/><path class="kkgh1qb4r"/></g>`,
		"fallback": "openmoji:wireframes",
	});
}

export default Component;
