import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_7bs7byi.css';
import '../../css/f/fugjbo8hn.css';
import '../../css/m/m36n2g68y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_7bs7byi"/><path class="fugjbo8hn"/><path clip-rule="evenodd" class="m36n2g68y"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-curly-hair",
	});
}

export default Component;
