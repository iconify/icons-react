import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woqaofgqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woqaofgqs"/>`,
		"fallback": "lucide-extended:workflow-filled",
	});
}

export default Component;
