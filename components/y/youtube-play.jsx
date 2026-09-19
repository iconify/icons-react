import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq4iw6b1s.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq4iw6b1s"/>`,
		"fallback": "zmdi:youtube-play",
	});
}

export default Component;
