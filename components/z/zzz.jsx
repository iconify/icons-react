import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls2mw5bpz.css';
import '../../css/n/ng-0l2b0x.css';
import '../../css/p/pnmqy4tny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls2mw5bpz"/><path class="ng-0l2b0x"/><path class="pnmqy4tny"/></g>`,
		"fallback": "fluent-emoji-flat:zzz",
	});
}

export default Component;
