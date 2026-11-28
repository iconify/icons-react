import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igkq-7b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igkq-7b-k"/>`,
		"fallback": "lucide:wind-arrow-up",
	});
}

export default Component;
