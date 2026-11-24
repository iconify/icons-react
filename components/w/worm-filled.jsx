import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y65ylmbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y65ylmbwr"/>`,
		"fallback": "lucide-extended:worm-filled",
	});
}

export default Component;
