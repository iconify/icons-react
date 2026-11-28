import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfmk6ub6x.css';
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
		"content": `<path class="kfmk6ub6x secondary"/><g class="dt0cm9dhy primary"><path class="whxzr4veb"/><path class="kzir-9buk"/></g>`,
		"fallback": "iconaut:zodiac-leo-duo",
	});
}

export default Component;
