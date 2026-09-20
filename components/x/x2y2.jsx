import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km06l1bkk.css';
import '../../css/h/hh9pgq2kj.css';
import '../../css/r/r6o281qjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km06l1bkk"/><path class="hh9pgq2kj"/><path clip-rule="evenodd" class="r6o281qjr"/>`,
		"fallback": "token:x2y2",
	});
}

export default Component;
