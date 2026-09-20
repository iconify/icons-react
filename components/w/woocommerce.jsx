import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiub_ndwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiub_ndwx"/>`,
		"fallback": "thesvg-color:woocommerce",
	});
}

export default Component;
