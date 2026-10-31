import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hdl2klvgu.css';
import '../../css/b/bu5nfh-nk.css';
import '../../css/f/fft4yz3uq.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hdl2klvgu"/><path class="bu5nfh-nk wm-k"/><path class="fft4yz3uq wm-a"/><path class="b2qohnadj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:webhook",
	});
}

export default Component;
