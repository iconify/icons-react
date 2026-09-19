import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv_y85bbm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv_y85bbm"/>`,
		"fallback": "icomoon-free:wondering2",
	});
}

export default Component;
