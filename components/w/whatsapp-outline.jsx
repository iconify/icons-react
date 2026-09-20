import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjz_34bha.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjz_34bha"/>`,
		"fallback": "teenyicons:whatsapp-outline",
	});
}

export default Component;
