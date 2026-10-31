import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smw7abbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smw7abbpj"/>`,
		"fallback": "coolicons:wifi-high-duotone-round",
	});
}

export default Component;
