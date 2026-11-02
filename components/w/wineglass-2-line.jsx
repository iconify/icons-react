import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf0bc8bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf0bc8bac"/>`,
		"fallback": "mingcute:wineglass-2-line",
	});
}

export default Component;
