import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewvl3nb8h.css';
import '../../css/v/vn8vinb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewvl3nb8h"/><path clip-rule="evenodd" class="vn8vinb_c"/>`,
		"fallback": "lineicons:www",
	});
}

export default Component;
