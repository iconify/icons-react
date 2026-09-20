import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq38d_g_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq38d_g_r"/>`,
		"fallback": "mdi:whistle-outline",
	});
}

export default Component;
