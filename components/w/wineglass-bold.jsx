import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucsituugr.css';
import '../../css/n/nfab9gbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucsituugr"/><path class="nfab9gbzg"/>`,
		"fallback": "solar:wineglass-bold",
	});
}

export default Component;
