import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amj8daclg.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amj8daclg"/>`,
		"fallback": "system-uicons:width",
	});
}

export default Component;
