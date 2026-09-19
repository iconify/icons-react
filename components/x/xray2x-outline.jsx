import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqfytvbmd.css';
import '../../css/j/jturxcmib.css';
import '../../css/a/awhq7acwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kqfytvbmd"/><path class="jturxcmib"/><path clip-rule="evenodd" class="awhq7acwr"/></g>`,
		"fallback": "healthicons:xray2x-outline",
	});
}

export default Component;
