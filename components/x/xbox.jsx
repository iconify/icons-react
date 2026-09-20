import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz-gusbmp.css';

const viewBox = {"width":88,"height":88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz-gusbmp"/>`,
		"fallback": "thesvg-color:xbox",
	});
}

export default Component;
