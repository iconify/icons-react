import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6og01bov.css';
import '../../css/z/zq6-sshry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6og01bov"/><path class="zq6-sshry"/>`,
		"fallback": "energy-icons:wholesale-price-20",
	});
}

export default Component;
