import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7_n2obnb.css';
import '../../css/k/kzg9x7d_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="g7_n2obnb"/><path class="kzg9x7d_n"/></g>`,
		"fallback": "cryptocurrency-color:xby",
	});
}

export default Component;
