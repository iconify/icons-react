import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukbw8ab9n.css';
import '../../css/s/sp3w5ocbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ukbw8ab9n"/><path class="sp3w5ocbw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:womans-hat",
	});
}

export default Component;
