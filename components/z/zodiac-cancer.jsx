import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv3_t4bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv3_t4bpd"/>`,
		"fallback": "mdi:zodiac-cancer",
	});
}

export default Component;
