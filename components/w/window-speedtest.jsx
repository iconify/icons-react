import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mkbxq6-rw.css';
import '../../css/j/jnnccto7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mkbxq6-rw"/><path class="jnnccto7i"/></g>`,
		"fallback": "streamline-cyber:window-speedtest",
	});
}

export default Component;
