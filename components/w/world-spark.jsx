import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhdj3cc0g.css';
import '../../css/g/gw18y0bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qhdj3cc0g"/><path class="gw18y0bvf"/></g>`,
		"fallback": "tabler:world-spark",
	});
}

export default Component;
