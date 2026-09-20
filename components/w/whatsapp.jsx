import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lofrdjd_e.css';

const viewBox = {"width":360,"height":362};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lofrdjd_e"/>`,
		"fallback": "thesvg-color:whatsapp",
	});
}

export default Component;
