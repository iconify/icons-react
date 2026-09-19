import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qhnjuqbov.css';
import '../../css/f/fv83j5bne.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="qhnjuqbov"/><path class="fv83j5bne"/></g>`,
		"fallback": "cryptocurrency-color:xp",
	});
}

export default Component;
