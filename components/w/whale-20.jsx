import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3t12zu5x.css';
import '../../css/i/io22ipbhv.css';
import '../../css/s/s63-krb-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3t12zu5x"/><path class="io22ipbhv"/><path class="s63-krb-h"/>`,
		"fallback": "energy-icons:whale-20",
	});
}

export default Component;
