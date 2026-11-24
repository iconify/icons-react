import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdi4l-b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdi4l-b_o"/>`,
		"fallback": "lucide-extended:zap-filled",
	});
}

export default Component;
