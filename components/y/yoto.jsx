import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahv9aqb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahv9aqb_w"/>`,
		"fallback": "cbi:yoto",
	});
}

export default Component;
