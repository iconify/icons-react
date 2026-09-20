import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzx72lvrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzx72lvrg"/>`,
		"fallback": "mingcute:wineglass-2-line",
	});
}

export default Component;
