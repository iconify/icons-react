import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uzrvx8nfp.css';
import '../../css/o/ocwlu6jwb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="uzrvx8nfp"/><path class="ocwlu6jwb"/></g>`,
		"fallback": "cryptocurrency-color:xdn",
	});
}

export default Component;
