import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_t047y1o.css';
import '../../css/n/nkr4jmcos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_t047y1o"/><path class="nkr4jmcos"/></g>`,
		"fallback": "tabler:world-cancel",
	});
}

export default Component;
