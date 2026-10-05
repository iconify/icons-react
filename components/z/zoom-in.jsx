import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c13q-1-6o.css';
import '../../css/n/npbdvbd7h.css';
import '../../css/x/xnydgsbih.css';
import '../../css/r/rij50zbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="c13q-1-6o"/><path class="npbdvbd7h"/><path class="xnydgsbih"/><path class="rij50zbkr"/></g>`,
		"fallback": "matita:zoom-in",
	});
}

export default Component;
