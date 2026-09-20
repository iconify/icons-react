import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll-v7cc5a.css';
import '../../css/t/t7ok3w4ym.css';
import '../../css/o/onfmwrbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ll-v7cc5a"/><path class="t7ok3w4ym"/><path class="onfmwrbco"/>`,
		"fallback": "token:xyo",
	});
}

export default Component;
