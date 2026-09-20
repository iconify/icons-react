import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgx04bw3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgx04bw3u"/>`,
		"fallback": "lucide:wind",
	});
}

export default Component;
