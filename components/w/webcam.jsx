import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j428c8brj.css';
import '../../css/s/sw254ibyk.css';
import '../../css/a/akokd1nfy.css';
import '../../css/p/py49z5b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j428c8brj"/><path class="sw254ibyk"/><path class="akokd1nfy"/><path class="py49z5b4j"/></g>`,
		"fallback": "iconaut:webcam",
	});
}

export default Component;
