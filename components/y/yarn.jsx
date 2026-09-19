import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz_smq6vy.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz_smq6vy"/>`,
		"fallback": "fa6-brands:yarn",
	});
}

export default Component;
