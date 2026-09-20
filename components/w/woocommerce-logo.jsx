import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q24xof2az.css';
import '../../css/s/sqnw23boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="q24xof2az"/><path class="sqnw23boz"/></g>`,
		"fallback": "streamline-logos:woocommerce-logo",
	});
}

export default Component;
