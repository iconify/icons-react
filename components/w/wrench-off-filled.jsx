import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igr5ktb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igr5ktb8q"/>`,
		"fallback": "lucide-extended:wrench-off-filled",
	});
}

export default Component;
