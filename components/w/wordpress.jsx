import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhuwsobbq.css';

const viewBox = {"width":995.329,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhuwsobbq"/>`,
		"fallback": "brandico:wordpress",
	});
}

export default Component;
