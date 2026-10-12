import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lszk02bvz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lszk02bvz"/>`,
		"fallback": "garden:wrap-left-stroke-20",
	});
}

export default Component;
