import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-mqzbcjv.css';
import '../../css/s/s1s3q_bsb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-mqzbcjv"/><path class="s1s3q_bsb"/>`,
		"fallback": "energy-icons:whistle-20",
	});
}

export default Component;
