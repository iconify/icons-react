import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9oz41bne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9oz41bne"/>`,
		"fallback": "ix:youtube-filled",
	});
}

export default Component;
