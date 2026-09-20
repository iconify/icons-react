import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmzecqb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmzecqb4g"/>`,
		"fallback": "streamline-logos:woocommerce-logo-solid",
	});
}

export default Component;
