import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tbocj6b7k.css';
import '../../css/o/o0fpxi1ym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="tbocj6b7k"/><path class="o0fpxi1ym"/></g>`,
		"fallback": "cryptocurrency-color:zec",
	});
}

export default Component;
