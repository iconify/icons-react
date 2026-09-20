import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtav2zbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtav2zbvu"/>`,
		"fallback": "streamline-logos:woocommerce-logo-block",
	});
}

export default Component;
