import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0__cy2tr.css';
import '../../css/j/jgfygccas.css';
import '../../css/b/b8gzgrtfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0__cy2tr"/><path class="jgfygccas"/><path class="b8gzgrtfe"/></g>`,
		"fallback": "streamline-color:wifi-antenna",
	});
}

export default Component;
