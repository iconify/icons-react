import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-c-frd3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-c-frd3g"/>`,
		"fallback": "lucide-extended:zap-off-filled",
	});
}

export default Component;
