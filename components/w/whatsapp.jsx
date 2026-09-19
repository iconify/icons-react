import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajsz_kbop.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajsz_kbop"/>`,
		"fallback": "ps:whatsapp",
	});
}

export default Component;
