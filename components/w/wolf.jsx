import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vv6su05os.css';
import '../../css/t/tkwrfxbol.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vv6su05os"/><path class="tkwrfxbol"/></g>`,
		"fallback": "fluent-emoji-high-contrast:wolf",
	});
}

export default Component;
