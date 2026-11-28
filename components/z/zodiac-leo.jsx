import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whxzr4veb.css';
import '../../css/k/kzir-9buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="whxzr4veb"/><path class="kzir-9buk"/></g>`,
		"fallback": "iconaut:zodiac-leo",
	});
}

export default Component;
