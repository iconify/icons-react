import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jog7wibwp.css';
import '../../css/w/wx_6pkbna.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jog7wibwp"/><path class="wx_6pkbna"/>`,
		"fallback": "openmoji:white-square",
	});
}

export default Component;
