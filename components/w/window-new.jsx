import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvr2w2bai.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvr2w2bai"/>`,
		"fallback": "zondicons:window-new",
	});
}

export default Component;
