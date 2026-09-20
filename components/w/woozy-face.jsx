import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/c_feybcat.css';
import '../../css/z/z-ndurbgj.css';
import '../../css/o/oi9vaunya.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><circle class="huuajhmrh"/><path class="c_feybcat"/><path class="z-ndurbgj"/><path class="oi9vaunya"/>`,
		"fallback": "openmoji:woozy-face",
	});
}

export default Component;
