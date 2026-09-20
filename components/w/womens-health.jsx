import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amcb6ybaq.css';
import '../../css/k/kasw7ebxt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amcb6ybaq"/><path class="kasw7ebxt"/>`,
		"fallback": "medical-icon:womens-health",
	});
}

export default Component;
