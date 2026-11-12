import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf6dewbbb.css';
import '../../css/h/hwhw6hqjo.css';
import '../../css/y/yy5qrkvzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf6dewbbb"/><path class="hwhw6hqjo"/><path class="yy5qrkvzr"/>`,
		"fallback": "selfhst:windows-terminal-light",
	});
}

export default Component;
