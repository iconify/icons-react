import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84xo7bjy.css';
import '../../css/o/okm7grcet.css';
import '../../css/o/oeuv6sbbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w84xo7bjy"/><path class="okm7grcet"/><path class="oeuv6sbbb"/>`,
		"fallback": "selfhst:youtube-watcher",
	});
}

export default Component;
