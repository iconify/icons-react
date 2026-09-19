import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/i/i4xydol5b.css';
import '../../css/c/c9yt0g5nq.css';
import '../../css/s/s04bc1zdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="i4xydol5b"/><path class="c9yt0g5nq"/><path class="s04bc1zdq"/></g>`,
		"fallback": "flag:ws-1x1",
	});
}

export default Component;
