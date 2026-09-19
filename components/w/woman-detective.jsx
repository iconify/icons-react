import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apw6v5fdj.css';
import '../../css/s/suenybcqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="apw6v5fdj"/><path class="suenybcqe"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-detective",
	});
}

export default Component;
