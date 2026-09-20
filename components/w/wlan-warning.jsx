import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk9_w01ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bk9_w01ix"/>`,
		"fallback": "ix:wlan-warning",
	});
}

export default Component;
