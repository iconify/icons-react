import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi3b2p9eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi3b2p9eq"/>`,
		"fallback": "lucide-extended:wine-off-filled",
	});
}

export default Component;
