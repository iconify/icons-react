import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-k9udc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-k9udc6x"/>`,
		"fallback": "simple-icons:yarn",
	});
}

export default Component;
